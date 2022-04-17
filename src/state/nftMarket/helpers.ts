import uniq from "lodash/uniq";
import range from "lodash/range";
import { API_NFT } from "config/constants/endpoints";
import erc721Abi from "config/abi/erc721.json";
import { multicallv2 } from "utils/multicall";
import {
  ApiCollections,
  ApiResponseSpecificToken,
  NftLocation,
  NftToken,
  TokenIdWithCollectionAddress,
} from "./types";

/**
 * Fetch a single NFT using the API
 * @param collectionAddress
 * @param tokenId
 * @returns NFT from API
 */
export const getNftApi = async (
  collectionAddress: string,
  tokenId: string
): Promise<ApiResponseSpecificToken["data"]> => {
  const res = await fetch(
    `${API_NFT}/collections/${collectionAddress}/tokens/${tokenId}`
  );
  if (res.ok) {
    const json = await res.json();
    return json.data;
  }

  console.error(
    `API: Can't fetch NFT token ${tokenId} in ${collectionAddress}`,
    res.status
  );
  return null;
};

/**
 * Fetch a list of NFT from different collections
 * @param from Array of { collectionAddress: string; tokenId: string }
 * @returns Array of NFT from API
 */
export const getNftsFromDifferentCollectionsApi = async (
  from: { collectionAddress: string; tokenId: string }[]
): Promise<NftToken[]> => {
  const promises = from.map((nft) =>
    getNftApi(nft.collectionAddress, nft.tokenId)
  );
  const responses = await Promise.all(promises);
  // Sometimes API can't find some tokens (e.g. 404 response)
  // at least return the ones that returned successfully
  return responses
    .filter((resp) => resp)
    .map((res, index) => ({
      tokenId: res.tokenId,
      name: res.name,
      collectionName: res.collection.name,
      collectionAddress: from[index].collectionAddress,
      description: res.description,
      attributes: res.attributes,
      createdAt: res.createdAt,
      updatedAt: res.updatedAt,
      image: res.image,
    }));
};

/**
 * Get in-wallet profile pic NFT metadata, complete with market data for a given account.
 * On sale will be listed but not able to claim (for easier implementation under smartcontract)
 * @param account
 * @param collections
 * @param profileNftWithCollectionAddress
 * @returns Promise<NftToken[]>
 */
export const getCompleteAccountNftData = async (
  account: string,
  collections: ApiCollections,
  profileNftWithCollectionAddress?: TokenIdWithCollectionAddress
): Promise<NftToken[]> => {
  const walletNftIdsWithCollectionAddress =
    await fetchWalletTokenIdsForCollections(account, collections);
  if (profileNftWithCollectionAddress?.tokenId) {
    walletNftIdsWithCollectionAddress.unshift(profileNftWithCollectionAddress);
  }

  const metadataForAllNfts = await getNftsFromDifferentCollectionsApi([
    ...walletNftIdsWithCollectionAddress,
  ]);

  return metadataForAllNfts;
};

export const fetchWalletTokenIdsForCollections = async (
  account: string,
  collections: ApiCollections
): Promise<TokenIdWithCollectionAddress[]> => {
  const balanceOfCalls = Object.values(collections).map((collection) => {
    const { address: collectionAddress } = collection;
    return {
      address: collectionAddress,
      name: "balanceOf",
      params: [account],
    };
  });

  const balanceOfCallsResultRaw = await multicallv2(erc721Abi, balanceOfCalls, {
    requireSuccess: false,
  });
  const balanceOfCallsResult = balanceOfCallsResultRaw.flat();

  const tokenIdCalls = Object.values(collections)
    .map((collection, index) => {
      const balanceOf = balanceOfCallsResult[index]?.toNumber() ?? 0;
      const { address: collectionAddress } = collection;

      return range(balanceOf).map((tokenIndex) => {
        return {
          address: collectionAddress,
          name: "tokenOfOwnerByIndex",
          params: [account, tokenIndex],
        };
      });
    })
    .flat();

  const tokenIdResultRaw = await multicallv2(erc721Abi, tokenIdCalls, {
    requireSuccess: false,
  });
  const tokenIdResult = tokenIdResultRaw.flat();

  const nftLocation = NftLocation.WALLET;

  const walletNfts = tokenIdResult.reduce((acc, tokenIdBn, index) => {
    if (tokenIdBn) {
      const { address: collectionAddress } = tokenIdCalls[index];
      acc.push({
        tokenId: tokenIdBn.toString(),
        collectionAddress,
        nftLocation,
      });
    }
    return acc;
  }, []);

  return walletNfts;
};
