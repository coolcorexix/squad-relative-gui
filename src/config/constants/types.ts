export type PageMeta = {
  title: string;
  description?: string;
  image?: string;
};

export interface Address {
  //* testnet
  97: string;
  //* mainnet
  56: string;
}

export enum FetchStatus {
  Idle = "IDLE",
  Fetching = "FETCHING",
  Fetched = "FETCHED",
  Failed = "FAILED",
}
