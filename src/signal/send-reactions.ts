// Stub file - Signal channel removed

type SignalReactionOpts = {
  accountId?: string;
  groupId?: string;
  targetAuthor?: string;
  targetAuthorUuid?: string;
};

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
