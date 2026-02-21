import express from "express";
import { spawn } from "node:child_process";
import { randomUUID } from "node:crypto";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(join(__dirname, "public")));

// In-memory session store: sessionId -> claude session id
const sessions = new Map();

/**
 * POST /api/chat
 * Body: { message: string, sessionId?: string }
 * Returns: Server-Sent Events stream of the Claude response
 */
app.post("/api/chat", (req, res) => {
  const { message, sessionId } = req.body;

  if (!message || typeof message !== "string") {
    return res.status(400).json({ error: "message is required" });
  }

  // Set up SSE headers for streaming
  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("Connection", "keep-alive");
  res.flushHeaders();

  // Build claude CLI args
  const args = [
    "-p",                          // print mode (non-interactive)
    "--output-format", "stream-json",  // streaming JSON output
  ];

  // Resume existing session if we have one
  const existingClaudeSession = sessions.get(sessionId);
  if (existingClaudeSession) {
    args.push("--resume", existingClaudeSession);
  }

  // Add the user message
  args.push(message);

  const claude = spawn("claude", args, {
    env: { ...process.env },
    stdio: ["pipe", "pipe", "pipe"],
  });

  let fullText = "";
  let capturedSessionId = existingClaudeSession || null;
  let buffer = "";

  claude.stdout.on("data", (chunk) => {
    buffer += chunk.toString();

    // Process complete JSON lines
    const lines = buffer.split("\n");
    buffer = lines.pop() || ""; // keep incomplete line in buffer

    for (const line of lines) {
      const trimmed = line.trim();
      if (!trimmed) continue;

      try {
        const event = JSON.parse(trimmed);

        // Capture session ID from the first message
        if (!capturedSessionId && event.session_id) {
          capturedSessionId = event.session_id;
        }

        // Handle different event types from Claude CLI stream
        if (event.type === "assistant" && event.message) {
          // Content block with text
          for (const block of event.message.content || []) {
            if (block.type === "text") {
              fullText += block.text;
              res.write(`data: ${JSON.stringify({ type: "text", text: block.text })}\n\n`);
            }
          }
        } else if (event.type === "content_block_delta") {
          if (event.delta?.type === "text_delta" && event.delta.text) {
            fullText += event.delta.text;
            res.write(`data: ${JSON.stringify({ type: "text", text: event.delta.text })}\n\n`);
          }
        } else if (event.type === "result") {
          // Final result event
          if (event.result) {
            fullText = event.result;
            res.write(`data: ${JSON.stringify({ type: "text", text: event.result })}\n\n`);
          }
          if (event.session_id) {
            capturedSessionId = event.session_id;
          }
        }
      } catch {
        // Not valid JSON — might be plain text output
        if (trimmed.length > 0) {
          fullText += trimmed;
          res.write(`data: ${JSON.stringify({ type: "text", text: trimmed })}\n\n`);
        }
      }
    }
  });

  claude.stderr.on("data", (chunk) => {
    const text = chunk.toString();
    // Only send actual errors, not progress info
    if (text.includes("Error") || text.includes("error")) {
      res.write(`data: ${JSON.stringify({ type: "error", text })}\n\n`);
    }
  });

  claude.on("close", (code) => {
    // Store the session mapping for continuity
    const clientSessionId = sessionId || randomUUID();
    if (capturedSessionId) {
      sessions.set(clientSessionId, capturedSessionId);
    }

    res.write(`data: ${JSON.stringify({
      type: "done",
      sessionId: clientSessionId,
      exitCode: code,
    })}\n\n`);
    res.end();
  });

  claude.on("error", (err) => {
    res.write(`data: ${JSON.stringify({
      type: "error",
      text: `Failed to spawn claude CLI: ${err.message}. Make sure 'claude' is installed and on PATH.`,
    })}\n\n`);
    res.end();
  });

  // Handle client disconnect
  req.on("close", () => {
    claude.kill("SIGTERM");
  });
});

// Health check
app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", provider: "claude-code-cli" });
});

app.listen(PORT, () => {
  console.log(`Claude Chat App running at http://localhost:${PORT}`);
  console.log(`Using Claude Code CLI as LLM provider`);
});
