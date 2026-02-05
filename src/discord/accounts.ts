// Stub file - Discord channel removed
// Provides minimal config parsing for tests

import type { CmlHiveAssistConfig } from "../config/config.ts";
import type { DiscordAccountConfig, DiscordGuildEntry } from "../config/types.discord.ts";

export type ResolvedDiscordAccount = {
  accountId: string;
  tokenSource: string;
  token?: string;
  config: DiscordAccountConfig & {
    token?: string;
    dm?: { allowFrom?: Array<string | number> };
    guilds?: Record<string, DiscordGuildEntry>;
    groupPolicy?: string;
  };
};

export function listDiscordAccountIds(cfg: CmlHiveAssistConfig): string[] {
  const discord = cfg?.channels?.discord;
  if (!discord) {
    return [];
  }
  const ids: string[] = [];
  if (discord.token) {
    ids.push("default");
  }
  if (discord.accounts) {
    ids.push(...Object.keys(discord.accounts));
  }
  return ids;
}

export function listEnabledDiscordAccounts(cfg: CmlHiveAssistConfig): ResolvedDiscordAccount[] {
  const discord = cfg?.channels?.discord;
  if (!discord) {
    return [];
  }
  const accounts: ResolvedDiscordAccount[] = [];

  if (discord.token) {
    accounts.push({
      accountId: "default",
      tokenSource: "config",
      token: discord.token,
      config: {
        token: discord.token,
        actions: discord.actions,
        dm: discord.dm,
        guilds: discord.guilds,
        groupPolicy: discord.groupPolicy,
      },
    });
  }

  if (discord.accounts) {
    for (const [id, acct] of Object.entries(discord.accounts)) {
      if (acct && typeof acct === "object") {
        accounts.push({
          accountId: id,
          tokenSource: acct.token ? "config" : "none",
          token: acct.token,
          config: acct as DiscordAccountConfig & {
            token?: string;
            dm?: { allowFrom?: Array<string | number> };
            guilds?: Record<string, DiscordGuildEntry>;
            groupPolicy?: string;
          },
        });
      }
    }
  }

  return accounts;
}

export function resolveDefaultDiscordAccountId(cfg: CmlHiveAssistConfig): string {
  const ids = listDiscordAccountIds(cfg);
  return ids[0] ?? "default";
}

export function resolveDiscordAccount(params: {
  cfg: CmlHiveAssistConfig;
  accountId?: string | null;
}): ResolvedDiscordAccount {
  const { cfg, accountId } = params;
  const discord = cfg?.channels?.discord;
  if (!discord) {
    return { accountId: accountId ?? "default", tokenSource: "none", config: {} };
  }

  if (accountId && discord.accounts?.[accountId]) {
    const acct = discord.accounts[accountId];
    return {
      accountId,
      tokenSource: acct.token ? "config" : "none",
      token: acct.token,
      config: acct as DiscordAccountConfig & {
        token?: string;
        dm?: { allowFrom?: Array<string | number> };
        guilds?: Record<string, DiscordGuildEntry>;
        groupPolicy?: string;
      },
    };
  }

  if (discord.token) {
    return {
      accountId: "default",
      tokenSource: "config",
      token: discord.token,
      config: {
        token: discord.token,
        actions: discord.actions,
        dm: discord.dm,
        guilds: discord.guilds,
        groupPolicy: discord.groupPolicy,
      },
    };
  }

  return { accountId: accountId ?? "default", tokenSource: "none", config: {} };
}
