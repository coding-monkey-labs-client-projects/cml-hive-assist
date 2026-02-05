// Stub file - Signal channel removed

type SignalReactionOpts = {
  accountId?: string;
  groupId?: string;
  targetAuthor?: string;
  targetAuthorUuid?: string;
};

type SignalSendOpts = {
  accountId?: string;
  groupId?: string;
  styles?: unknown[];
  maxBytes?: number;
  mediaUrl?: string;
  textMode?: "plain" | "markdown";
  textStyles?: unknown[];
};

export function sendMessageSignal(
  _recipient?: string | null,
  _message?: string | null,
  _opts?: SignalSendOpts,
): Promise<{ ok: false; error: string; messageId: string }> {
  return Promise.resolve({ ok: false, error: "Signal channel removed", messageId: "" });
}

export function sendReactionSignal(
  _recipient: string,
  _timestamp: number,
  _emoji: string,
  _opts?: SignalReactionOpts,
): Promise<void> {
  return Promise.resolve();
}

export function removeReactionSignal(
  _recipient: string,
  _timestamp: number,
  _emoji: string,
  _opts?: SignalReactionOpts,
): Promise<void> {
  return Promise.resolve();
}
