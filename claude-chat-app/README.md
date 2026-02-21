# Claude Chat App

A simple chat application that uses the **Claude Code CLI** as its LLM backend.

## How it works

```
Browser  <-->  Express Server  <-->  Claude Code CLI (subprocess)
  (SSE)          (Node.js)             (claude -p --output-format stream-json)
```

- **Frontend**: Vanilla HTML/CSS/JS chat UI with streaming responses
- **Backend**: Express server that spawns `claude` CLI for each message
- **Session continuity**: The server tracks Claude session IDs so follow-up messages maintain conversation context via `--resume`

## Prerequisites

- **Node.js** 18+
- **Claude Code CLI** installed and authenticated (`claude` must be on your PATH)

```bash
# Verify claude is available
claude --version
```

## Getting started

```bash
cd claude-chat-app
npm install
npm start
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

## Configuration

| Env Variable | Default | Description |
|---|---|---|
| `PORT` | `3000` | Server port |

## Architecture

### Backend (`server.js`)

- `POST /api/chat` — Accepts `{ message, sessionId? }`, spawns `claude -p --output-format stream-json`, and streams the response back as Server-Sent Events
- `GET /api/health` — Health check endpoint
- Session map keeps track of Claude CLI session IDs for conversation continuity

### Frontend (`public/index.html`)

- Single-page chat UI
- Reads the SSE stream and renders tokens as they arrive (typewriter effect)
- Supports multi-turn conversations via session tracking
- Shift+Enter for newlines, Enter to send
