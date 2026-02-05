// Stub file - iMessage channel removed
// Provides minimal normalization for tests

export type IMessageTargetResult = {
  kind: "handle" | "chat_id" | "chat_guid" | "chat_identifier";
  to?: string;
  chatId?: number;
  chatGuid?: string;
  chatIdentifier?: string;
  handle?: string;
};

const CHAT_TARGET_PREFIX_RE =
  /^(chat_id:|chatid:|chat:|chat_guid:|chatguid:|guid:|chat_identifier:|chatidentifier:|chatident:)/i;

export function parseIMessageTarget(_target: string): IMessageTargetResult | null {
  return null;
}

export function normalizeIMessageHandle(handle: string): string | undefined {
  const trimmed = handle.trim();
  if (!trimmed) {
    return undefined;
  }

  // Check for chat target prefixes (these should be returned normalized)
  const chatMatch = trimmed.match(CHAT_TARGET_PREFIX_RE);
  if (chatMatch) {
    const prefix = chatMatch[0].toLowerCase();
    const normalizedPrefix = prefix
      .replace(/^chatid:/i, "chat_id:")
      .replace(/^chat:/i, "chat_id:")
      .replace(/^chatguid:/i, "chat_guid:")
      .replace(/^guid:/i, "chat_guid:")
      .replace(/^chatidentifier:/i, "chat_identifier:")
      .replace(/^chatident:/i, "chat_identifier:");
    const value = trimmed.slice(chatMatch[0].length).toLowerCase();
    return `${normalizedPrefix}${value}`;
  }

  // For phone numbers, strip non-numeric except leading +
  if (/^\+?\d/.test(trimmed) || /^\(\d/.test(trimmed)) {
    const digits = trimmed.replace(/[^\d+]/g, "");
    return digits || undefined;
  }

  // For emails or other handles, return as-is
  return trimmed;
}
