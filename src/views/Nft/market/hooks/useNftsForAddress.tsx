import { FetchStatus } from "config/constants/types";
import { laggyMiddleware } from "hooks/useSWRContract";
import isEmpty from "lodash/isEmpty";
import { useMemo } from "react";
import { getCompleteAccountNftData } from "state/nftMarket/helpers";
import { useGetCollections } from "state/nftMarket/hooks";
import { NftLocation } from "state/nftMarket/types";
import { Profile } from "state/types";
import useSWR from "swr";
import { isAddress } from "utils";

export const useNftsForAddress = (
  account: string,
  profile: Profile,
  isProfileFetching: boolean
) => {
  const { data: collections } = useGetCollections();
  const hasProfileNft = profile?.tokenId;
  const profileNftTokenId = profile?.tokenId?.toString();
  const profileNftCollectionAddress = profile?.collectionAddress;

  const profileNftWithCollectionAddress = useMemo(() => {
    if (hasProfileNft) {
      return {
        tokenId: profileNftTokenId,
        collectionAddress: profileNftCollectionAddress,
        nftLocation: NftLocation.PROFILE,
      };
    }
    return null;
  }, [profileNftTokenId, profileNftCollectionAddress, hasProfileNft]);

  const { status, data, mutate } = useSWR(
    !isProfileFetching && !isEmpty(collections) && isAddress(account)
      ? [account, "userNfts"]
      : null,
    async () => getCompleteAccountNftData(account, collections, profileNftWithCollectionAddress),
    { use: [laggyMiddleware] }
  );
  console.log("🚀 ~ file: useNftsForAddress.tsx ~ line 34 ~ status", status);

  return {
    data: data ?? [],
    isLoading: status !== FetchStatus.Fetched,
    refresh: mutate,
  };
};
