// Stub file - Discord channel removed
// Provides minimal parsing for tests

export type ParsedDiscordTarget = {
  kind: "user" | "channel";
  id: string;
  normalized: string;
  channel?: string;
  user?: string;
};

export function parseDiscordTarget(
  target: string,
  opts?: { defaultKind?: "user" | "channel" },
): ParsedDiscordTarget | null {
  const trimmed = target?.trim();
  if (!trimmed) {
    return null;
  }

  // Handle channel: prefix
  if (trimmed.toLowerCase().startsWith("channel:")) {
    const id = trimmed.slice("channel:".length).trim();
    return { kind: "channel", id, normalized: `channel:${id}`, channel: id };
  }

  // Handle user: prefix
  if (trimmed.toLowerCase().startsWith("user:")) {
    const id = trimmed.slice("user:".length).trim();
    return { kind: "user", id, normalized: `user:${id}`, user: id };
  }

  // Default based on opts
  const kind = opts?.defaultKind ?? "channel";
  return {
    kind,
    id: trimmed,
    normalized: `${kind}:${trimmed}`,
    ...(kind === "channel" ? { channel: trimmed } : { user: trimmed }),
  };
}

export function resolveDiscordChannelId(params: unknown): string {
  if (typeof params === "string") {
    const trimmed = params.trim();
    if (!trimmed) {
      return "";
    }

    // If prefixed, extract just the ID
    if (trimmed.toLowerCase().startsWith("channel:")) {
      return trimmed.slice("channel:".length).trim();
    }

    // Just a raw ID - return as-is
    return trimmed;
  }
  return "";
}
