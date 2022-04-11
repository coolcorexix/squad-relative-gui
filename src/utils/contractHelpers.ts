import type { Signer } from "@ethersproject/abstract-signer";
import type { Provider } from "@ethersproject/providers";
import { Contract } from "@ethersproject/contracts";
import { simpleRpcProvider } from "utils/providers";
import tokens from "config/constants/tokens";

// Addresses
import {
  getAddress,
  getPancakeSquadAddress,
} from "utils/addressHelpers";

// ABI
import nftMarketAbi from "config/abi/nftMarket.json";
import nftSaleAbi from "config/abi/nftSale.json";
import pancakeSquadAbi from "config/abi/pancakeSquad.json";
import erc721CollectionAbi from "config/abi/erc721collection.json";

// Types
import type {
  Erc20,
  Erc721,
  Multicall,
  NftMarket,
  NftSale,
  PancakeSquad,
  Erc721collection,
} from "config/abi/types";

const getContract = (abi: any, address: string, signer?: Signer | Provider) => {
  const signerOrProvider = signer ?? simpleRpcProvider;
  return new Contract(address, abi, signerOrProvider);
};

export const getMulticallContract = () => {
  return getContract(MultiCallAbi, getMulticallAddress(), simpleRpcProvider) as Multicall
}

export const getBep20Contract = (
  address: string,
  signer?: Signer | Provider
) => {
  return getContract(bep20Abi, address, signer) as Erc20;
};
export const getErc721Contract = (
  address: string,
  signer?: Signer | Provider
) => {
  return getContract(erc721Abi, address, signer) as Erc721;
};

export const getNftMarketContract = (signer?: Signer | Provider) => {
  return getContract(nftMarketAbi, getNftMarketAddress(), signer) as NftMarket;
};
export const getNftSaleContract = (signer?: Signer | Provider) => {
  return getContract(nftSaleAbi, getNftSaleAddress(), signer) as NftSale;
};
export const getPancakeSquadContract = (signer?: Signer | Provider) => {
  return getContract(
    pancakeSquadAbi,
    getPancakeSquadAddress(),
    signer
  ) as PancakeSquad;
};
export const getErc721CollectionContract = (
  signer?: Signer | Provider,
  address?: string
) => {
  return getContract(erc721CollectionAbi, address, signer) as Erc721collection;
};
