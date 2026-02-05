// Stub file - Signal channel removed
// Provides minimal config parsing for tests

import type { CmlHiveAssistConfig } from "../config/config.ts";

export type SignalReactionLevelResult = {
  level: "extensive" | "minimal" | "none";
  agentReactionsEnabled: boolean;
  agentReactionGuidance?: "extensive" | "minimal";
};

export function resolveSignalReactionLevel(params?: {
  cfg?: CmlHiveAssistConfig;
  accountId?: string;
}): SignalReactionLevelResult {
  const cfg = params?.cfg;
  const accountId = params?.accountId;
  const signal = cfg?.channels?.signal;

  if (!signal) {
    return { level: "none", agentReactionsEnabled: false, agentReactionGuidance: undefined };
  }

  // Check account-specific reactionLevel first
  if (accountId && signal.accounts?.[accountId]) {
    const acct = signal.accounts[accountId];
    if (acct.reactionLevel) {
      const level = acct.reactionLevel as "extensive" | "minimal" | "none";
      const enabled = level !== "none";
      return {
        level,
        agentReactionsEnabled: enabled,
        agentReactionGuidance: enabled ? level : undefined,
      };
    }
  }

  // Check top-level reactionLevel config
  if (signal.reactionLevel) {
    const level = signal.reactionLevel as "extensive" | "minimal" | "none";
    const enabled = level !== "none";
    return {
      level,
      agentReactionsEnabled: enabled,
      agentReactionGuidance: enabled ? level : undefined,
    };
  }

  // Default: enabled if account is configured (actions.reactions is a separate gate)
  if (signal.account || (accountId && signal.accounts?.[accountId]?.account)) {
    return { level: "extensive", agentReactionsEnabled: true, agentReactionGuidance: "extensive" };
  }

  return { level: "none", agentReactionsEnabled: false, agentReactionGuidance: undefined };
}
