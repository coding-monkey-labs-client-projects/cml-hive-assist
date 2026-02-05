// Stub file - LINE channel removed

export type LineConfig = {
  enabled?: boolean;
  accounts?: Record<string, LineAccountConfig>;
};

export type LineAccountConfig = {
  enabled?: boolean;
  channelSecret?: string;
  accessToken?: string;
};

export type ResolvedLineAccount = {
  accountId: string;
  config: LineAccountConfig;
};

export type LineLocation = {
  title: string;
  address: string;
  latitude: number;
  longitude: number;
};

export type LineTemplateMessage = {
  type: "confirm" | "buttons" | "carousel";
  text?: string;
  altText?: string;
  confirmLabel?: string;
  confirmData?: string;
  denyLabel?: string;
  denyData?: string;
  cancelLabel?: string;
  cancelData?: string;
  title?: string;
  actions?: Array<{
    type: string;
    label: string;
    data?: string;
    uri?: string;
  }>;
  columns?: unknown[];
};

export type LineFlexMessage = {
  altText: string;
  contents: unknown;
};

export type LineChannelData = {
  channelId?: string;
  channelSecret?: string;
  accessToken?: string;
  quickReplies?: string[];
  location?: LineLocation;
  templateMessage?: LineTemplateMessage;
  flexMessage?: LineFlexMessage;
};
