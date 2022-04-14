import { API_NFT } from "config/constants/endpoints";
import { ApiResponseSpecificToken } from "./types";

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
