// Stub file - Signal channel removed

export type SignalTextStyleRange = {
  start: number;
  length: number;
  style: string;
};

export function markdownToSignalTextChunks(
  _text: string,
  _maxLength?: number,
  _opts?: { tableMode?: string },
): Array<{ text: string; styles: SignalTextStyleRange[] }> {
  return [];
}
