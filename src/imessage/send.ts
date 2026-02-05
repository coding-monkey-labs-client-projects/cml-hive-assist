// Stub file - iMessage channel removed

type IMessageSendOpts = {
  maxBytes?: number;
  accountId?: string;
  mediaUrl?: string;
  groupId?: string;
};

export function sendMessageIMessage(
  _to?: string | null,
  _text?: string | null,
  _opts?: IMessageSendOpts,
): Promise<{ ok: false; error: string; messageId: string }> {
  return Promise.resolve({ ok: false, error: "iMessage channel removed", messageId: "" });
}
