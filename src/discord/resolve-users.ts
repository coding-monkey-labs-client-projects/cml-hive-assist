// Stub file - Discord channel removed

export type DiscordUserResolution = {
  input: string;
  resolved: boolean;
  name?: string;
  userId?: string;
  id?: string;
};

export function resolveDiscordUserAllowlist(_params?: {
  token?: string;
  entries?: string[];
}): Promise<DiscordUserResolution[]> {
  return Promise.resolve([]);
}
