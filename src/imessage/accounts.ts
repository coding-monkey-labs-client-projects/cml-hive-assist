// Stub file - iMessage channel removed

import type { CmlHiveAssistConfig } from "../config/config.ts";
import type { IMessageAccountConfig } from "../config/types.imessage.ts";

export type ResolvedIMessageAccount = {
  accountId: string;
  config: IMessageAccountConfig;
};

export function listIMessageAccountIds(_cfg: CmlHiveAssistConfig): string[] {
  return [];
}

export function resolveDefaultIMessageAccountId(_cfg: CmlHiveAssistConfig): string {
  return "default";
}

export function resolveIMessageAccount(_params: {
  cfg: CmlHiveAssistConfig;
  accountId?: string | null;
}): ResolvedIMessageAccount {
  return {
    accountId: "default",
    config: {},
  };
}
