// Stub file - Signal channel removed
// Provides minimal config parsing for tests

import type { CmlHiveAssistConfig } from "../config/config.ts";
import type { SignalAccountConfig } from "../config/types.signal.ts";

export type ResolvedSignalAccount = {
  accountId: string;
  configured: boolean;
  config: SignalAccountConfig;
};

export function listSignalAccountIds(cfg: CmlHiveAssistConfig): string[] {
  const signal = cfg?.channels?.signal;
  if (!signal) {
    return [];
  }
  const ids: string[] = [];
  if (signal.account) {
    ids.push("default");
  }
  if (signal.accounts) {
    ids.push(...Object.keys(signal.accounts));
  }
  return ids;
}

export function listEnabledSignalAccounts(cfg: CmlHiveAssistConfig): ResolvedSignalAccount[] {
  const signal = cfg?.channels?.signal;
  if (!signal) {
    return [];
  }
  const accounts: ResolvedSignalAccount[] = [];

  if (signal.account) {
    accounts.push({
      accountId: "default",
      configured: true,
      config: {
        account: signal.account,
        actions: signal.actions,
      },
    });
  }

  if (signal.accounts) {
    for (const [id, acct] of Object.entries(signal.accounts)) {
      if (acct && typeof acct === "object") {
        accounts.push({
          accountId: id,
          configured: Boolean(acct.account),
          config: acct,
        });
      }
    }
  }

  return accounts;
}

export function resolveDefaultSignalAccountId(cfg: CmlHiveAssistConfig): string {
  const ids = listSignalAccountIds(cfg);
  return ids[0] ?? "default";
}

export function resolveSignalAccount(params: {
  cfg: CmlHiveAssistConfig;
  accountId?: string | null;
}): ResolvedSignalAccount {
  const { cfg, accountId } = params;
  const signal = cfg?.channels?.signal;
  if (!signal) {
    return { accountId: accountId ?? "default", configured: false, config: {} };
  }

  if (accountId && signal.accounts?.[accountId]) {
    const acct = signal.accounts[accountId];
    return {
      accountId,
      configured: Boolean(acct.account),
      config: acct,
    };
  }

  if (signal.account) {
    return {
      accountId: "default",
      configured: true,
      config: {
        account: signal.account,
        actions: signal.actions,
      },
    };
  }

  return { accountId: accountId ?? "default", configured: false, config: {} };
}
