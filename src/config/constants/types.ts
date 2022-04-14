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

export type Images = {
  lg: string
  md: string
  sm: string
  ipfs?: string
}

export type TeamImages = {
  alt: string
} & Images

export type Team = {
  id: number
  name: string
  description: string
  isJoinable?: boolean
  users: number
  points: number
  images: TeamImages
  background: string
  textColor: string
}