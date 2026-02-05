// Stub file - Discord channel removed

type AccountOpts = {
  accountId?: string;
  content?: string;
  mediaUrl?: string;
  replyTo?: string;
  embeds?: unknown[];
  limit?: number;
  verbose?: boolean;
  token?: string;
};

export function sendMessageDiscord(
  _to?: string | null,
  _content?: string | null,
  _opts?: AccountOpts,
): Promise<{ ok: false; error: string; messageId: string }> {
  return Promise.resolve({ ok: false, error: "Discord channel removed", messageId: "" });
}

export function sendPollDiscord(
  _to?: string | null,
  _poll?: {
    question: string;
    options: string[];
    maxSelections?: number;
    durationHours?: number;
  },
  _opts?: AccountOpts,
): Promise<{ ok: false; error: string; messageId: string }> {
  return Promise.resolve({ ok: false, error: "Discord channel removed", messageId: "" });
}

export type DiscordChannelPermissions = {
  channelId: string;
  guildId?: string;
  isDm: boolean;
  channelType: number;
  permissions: string[];
  raw?: string;
};

export function fetchChannelPermissionsDiscord(
  _channelId?: string | null,
  _opts?: AccountOpts,
): Promise<DiscordChannelPermissions | null> {
  return Promise.resolve(null);
}

export function banMemberDiscord(
  _params?: {
    guildId?: string;
    userId?: string;
    reason?: string;
    deleteMessageDays?: number;
  },
  _opts?: AccountOpts,
): Promise<{ ok: false; error: string }> {
  return Promise.resolve({ ok: false, error: "Discord channel removed" });
}

export function kickMemberDiscord(
  _params?: {
    guildId?: string;
    userId?: string;
    reason?: string;
  },
  _opts?: AccountOpts,
): Promise<{ ok: false; error: string }> {
  return Promise.resolve({ ok: false, error: "Discord channel removed" });
}

export function timeoutMemberDiscord(
  _params?: {
    guildId?: string;
    userId?: string;
    durationMinutes?: number;
    until?: string;
    reason?: string;
  },
  _opts?: AccountOpts,
): Promise<{ ok: false; error: string }> {
  return Promise.resolve({ ok: false, error: "Discord channel removed" });
}

export function sendTypingDiscord(_channelId?: string | null, _opts?: AccountOpts): Promise<void> {
  return Promise.resolve();
}

export function addReactionDiscord(
  _channelId?: string | null,
  _messageId?: string | null,
  _emoji?: string | null,
  _opts?: AccountOpts,
): Promise<{ ok: false; error: string }> {
  return Promise.resolve({ ok: false, error: "Discord channel removed" });
}

export function removeReactionDiscord(
  _channelId?: string | null,
  _messageId?: string | null,
  _emoji?: string | null,
  _opts?: AccountOpts,
): Promise<{ ok: false; error: string }> {
  return Promise.resolve({ ok: false, error: "Discord channel removed" });
}

export function deleteMessageDiscord(
  _channelId?: string | null,
  _messageId?: string | null,
  _opts?: AccountOpts,
): Promise<{ ok: false; error: string }> {
  return Promise.resolve({ ok: false, error: "Discord channel removed" });
}

export function editMessageDiscord(
  _channelId?: string | null,
  _messageId?: string | null,
  _content?: { content: string } | null,
  _opts?: AccountOpts,
): Promise<{ ok: false; error: string }> {
  return Promise.resolve({ ok: false, error: "Discord channel removed" });
}

export function pinMessageDiscord(
  _channelId?: string | null,
  _messageId?: string | null,
  _opts?: AccountOpts,
): Promise<{ ok: false; error: string }> {
  return Promise.resolve({ ok: false, error: "Discord channel removed" });
}

export function unpinMessageDiscord(
  _channelId?: string | null,
  _messageId?: string | null,
  _opts?: AccountOpts,
): Promise<{ ok: false; error: string }> {
  return Promise.resolve({ ok: false, error: "Discord channel removed" });
}

export function fetchMessageDiscord(
  _channelId?: string | null,
  _messageId?: string | null,
  _opts?: AccountOpts,
): Promise<null> {
  return Promise.resolve(null);
}

export function fetchChannelInfoDiscord(
  _channelId?: string | null,
  _opts?: AccountOpts,
): Promise<null> {
  return Promise.resolve(null);
}

export function listChannelMembersDiscord(
  _channelId?: string | null,
  _opts?: AccountOpts,
): Promise<never[]> {
  return Promise.resolve([]);
}

export function listChannelMessagesDiscord(
  _channelId?: string | null,
  _limit?: number,
  _opts?: AccountOpts,
): Promise<never[]> {
  return Promise.resolve([]);
}

export function searchChannelMessagesDiscord(
  _channelId?: string | null,
  _query?: string | null,
  _opts?: AccountOpts,
): Promise<never[]> {
  return Promise.resolve([]);
}

export function fetchGuildInfoDiscord(
  _guildId?: string | null,
  _opts?: AccountOpts,
): Promise<null> {
  return Promise.resolve(null);
}

export function listGuildChannelsDiscord(
  _guildId?: string | null,
  _opts?: AccountOpts,
): Promise<never[]> {
  return Promise.resolve([]);
}

export function listGuildMembersDiscord(
  _guildId?: string | null,
  _limit?: number,
  _opts?: AccountOpts,
): Promise<never[]> {
  return Promise.resolve([]);
}

export function listGuildRolesDiscord(
  _guildId?: string | null,
  _opts?: AccountOpts,
): Promise<never[]> {
  return Promise.resolve([]);
}

export function fetchUserInfoDiscord(_userId?: string | null, _opts?: AccountOpts): Promise<null> {
  return Promise.resolve(null);
}

export function createThreadDiscord(
  _channelId?: string | null,
  _params?: {
    name?: string;
    messageId?: string;
    autoArchiveMinutes?: number;
  },
  _opts?: AccountOpts,
): Promise<{ ok: false; error: string }> {
  return Promise.resolve({ ok: false, error: "Discord channel removed" });
}

export function fetchReactionsDiscord(
  _channelId?: string | null,
  _messageId?: string | null,
  _opts?: AccountOpts & { limit?: number },
): Promise<never[]> {
  return Promise.resolve([]);
}

export function sendStickerDiscord(
  _to?: string | null,
  _stickerIds?: string[],
  _opts?: AccountOpts,
): Promise<void> {
  return Promise.resolve();
}

export function reactMessageDiscord(
  _channelId?: string | null,
  _messageId?: string | null,
  _emoji?: string | null,
  _opts?: AccountOpts,
): Promise<void> {
  return Promise.resolve();
}

export function removeOwnReactionsDiscord(
  _channelId?: string | null,
  _messageId?: string | null,
  _opts?: AccountOpts,
): Promise<{ removed: string[] }> {
  return Promise.resolve({ removed: [] });
}

export function readMessagesDiscord(
  _channelId?: string | null,
  _query?: {
    limit?: number;
    before?: string | null;
    after?: string | null;
    around?: string | null;
  },
  _opts?: AccountOpts,
): Promise<never[]> {
  return Promise.resolve([]);
}

export function listThreadsDiscord(
  _params?:
    | string
    | null
    | {
        guildId?: string;
        channelId?: string;
        includeArchived?: boolean;
        before?: string;
        limit?: number;
      },
  _opts?: AccountOpts,
): Promise<never[]> {
  return Promise.resolve([]);
}

export function listPinsDiscord(_channelId?: string | null, _opts?: AccountOpts): Promise<never[]> {
  return Promise.resolve([]);
}

export function searchMessagesDiscord(
  _params?:
    | string
    | null
    | {
        guildId?: string;
        content?: string;
        channelIds?: string[];
        authorIds?: string[];
        limit?: number;
      },
  _opts?: AccountOpts,
): Promise<{ messages: never[] }> {
  return Promise.resolve({ messages: [] });
}

export function listGuildEmojisDiscord(
  _guildId?: string | null,
  _opts?: AccountOpts,
): Promise<never[]> {
  return Promise.resolve([]);
}

export function uploadEmojiDiscord(
  _params?: {
    guildId?: string;
    name?: string;
    mediaUrl?: string;
    roleIds?: string[];
  },
  _opts?: AccountOpts,
): Promise<{ ok: false; error: string }> {
  return Promise.resolve({ ok: false, error: "Discord channel removed" });
}

export function uploadStickerDiscord(
  _params?: {
    guildId?: string;
    name?: string;
    description?: string;
    tags?: string;
    mediaUrl?: string;
  },
  _opts?: AccountOpts,
): Promise<{ ok: false; error: string }> {
  return Promise.resolve({ ok: false, error: "Discord channel removed" });
}

export function addRoleDiscord(
  _params?: { guildId?: string; userId?: string; roleId?: string },
  _opts?: AccountOpts,
): Promise<void> {
  return Promise.resolve();
}

export function removeRoleDiscord(
  _params?: { guildId?: string; userId?: string; roleId?: string },
  _opts?: AccountOpts,
): Promise<void> {
  return Promise.resolve();
}

export function createChannelDiscord(
  _params?: {
    guildId?: string;
    name?: string;
    type?: number;
    parentId?: string;
    topic?: string;
    position?: number;
    nsfw?: boolean;
  },
  _opts?: AccountOpts,
): Promise<null> {
  return Promise.resolve(null);
}

export function editChannelDiscord(
  _params?: {
    channelId?: string;
    name?: string;
    topic?: string;
    position?: number;
    parentId?: string | null;
    nsfw?: boolean;
    rateLimitPerUser?: number;
  },
  _opts?: AccountOpts,
): Promise<null> {
  return Promise.resolve(null);
}

export function deleteChannelDiscord(
  _channelId?: string | null,
  _opts?: AccountOpts,
): Promise<void> {
  return Promise.resolve();
}

export function moveChannelDiscord(
  _params?: {
    guildId?: string;
    channelId?: string;
    parentId?: string | null;
    position?: number;
  },
  _opts?: AccountOpts,
): Promise<void> {
  return Promise.resolve();
}

export function createCategoryDiscord(
  _guildId?: string | null,
  _name?: string | null,
  _opts?: AccountOpts,
): Promise<null> {
  return Promise.resolve(null);
}

export function editCategoryDiscord(
  _categoryId?: string | null,
  _name?: string | null,
  _opts?: AccountOpts,
): Promise<null> {
  return Promise.resolve(null);
}

export function deleteCategoryDiscord(
  _categoryId?: string | null,
  _opts?: AccountOpts,
): Promise<void> {
  return Promise.resolve();
}

export function setChannelPermissionDiscord(
  _params?: {
    channelId?: string;
    targetId?: string;
    targetType?: number;
    allow?: string;
    deny?: string;
  },
  _opts?: AccountOpts,
): Promise<void> {
  return Promise.resolve();
}

export function removeChannelPermissionDiscord(
  _channelId?: string | null,
  _targetId?: string | null,
  _opts?: AccountOpts,
): Promise<void> {
  return Promise.resolve();
}

export function listGuildStickersDiscord(
  _guildId?: string | null,
  _opts?: AccountOpts,
): Promise<never[]> {
  return Promise.resolve([]);
}

export function fetchMemberInfoDiscord(
  _guildId?: string | null,
  _userId?: string | null,
  _opts?: AccountOpts,
): Promise<null> {
  return Promise.resolve(null);
}

export function fetchRoleInfoDiscord(_guildId?: string | null, _opts?: AccountOpts): Promise<null> {
  return Promise.resolve(null);
}

export function fetchVoiceStatusDiscord(
  _guildId?: string | null,
  _userId?: string | null,
  _opts?: AccountOpts,
): Promise<null> {
  return Promise.resolve(null);
}

export function listGuildEventsDiscord(
  _guildId?: string | null,
  _opts?: AccountOpts,
): Promise<never[]> {
  return Promise.resolve([]);
}

export function createGuildEventDiscord(
  _guildId?: string | null,
  _payload?: Record<string, unknown>,
  _opts?: AccountOpts,
): Promise<null> {
  return Promise.resolve(null);
}

export function createScheduledEventDiscord(
  _guildId?: string | null,
  _payload?: Record<string, unknown>,
  _opts?: AccountOpts,
): Promise<{ ok: false; error: string }> {
  return Promise.resolve({ ok: false, error: "Discord channel removed" });
}

export function listScheduledEventsDiscord(
  _guildId?: string | null,
  _opts?: AccountOpts,
): Promise<never[]> {
  return Promise.resolve([]);
}
