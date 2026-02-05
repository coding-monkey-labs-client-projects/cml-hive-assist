// Stub file - Discord channel removed

export type DiscordChannelResolution = {
  input: string;
  resolved: boolean;
  guildId?: string;
  guildName?: string;
  channelId?: string;
  channelName?: string;
  name?: string;
};

export function resolveDiscordChannelAllowlist(_params?: {
  token?: string;
  entries?: string[];
}): Promise<DiscordChannelResolution[]> {
  return Promise.resolve([]);
}
