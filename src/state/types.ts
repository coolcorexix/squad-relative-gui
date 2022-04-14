import { NftToken } from "./nftMarket/types"

export interface Profile {
    userId: number
    points: number
    teamId: number
    collectionAddress: string
    tokenId: number
    isActive: boolean
    username: string
    nft?: NftToken
    team?: Team
    hasRegistered: boolean
  }