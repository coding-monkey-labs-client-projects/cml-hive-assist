// Stub file - Signal channel removed

export type SignalSender = {
  uuid?: string;
  number?: string;
};

export function resolveSignalIdentity(_params?: unknown): null {
  return null;
}

export function normalizeSignalNumber(_number: string): string {
  return "";
}

export function resolveSignalNumber(_params?: unknown): string | null {
  return null;
}

export function resolveSignalPeerId(_sender?: SignalSender | null): string {
  return "";
}

export function resolveSignalRecipient(_sender?: SignalSender | null): string {
  return "";
}

export function resolveSignalSender(_params?: {
  sourceUuid?: string | null;
  sourceNumber?: string | null;
}): SignalSender | null {
  return null;
}
