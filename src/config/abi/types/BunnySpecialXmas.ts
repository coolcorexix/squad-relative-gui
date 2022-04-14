/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "./common";

export interface BunnySpecialXmasInterface extends utils.Interface {
  functions: {
    "bunnyMintingStation()": FunctionFragment;
    "canClaim(address)": FunctionFragment;
    "endBlock()": FunctionFragment;
    "hasClaimed(address)": FunctionFragment;
    "mintNFT()": FunctionFragment;
    "nftId()": FunctionFragment;
    "owner()": FunctionFragment;
    "pancakeProfile()": FunctionFragment;
    "pancakeProfileThresholdPoints()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "tokenURI()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "updateEndBlock(uint256)": FunctionFragment;
    "updateThresholdPoints(uint256)": FunctionFragment;
    "updateTokenURI(string)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "bunnyMintingStation"
      | "canClaim"
      | "endBlock"
      | "hasClaimed"
      | "mintNFT"
      | "nftId"
      | "owner"
      | "pancakeProfile"
      | "pancakeProfileThresholdPoints"
      | "renounceOwnership"
      | "tokenURI"
      | "transferOwnership"
      | "updateEndBlock"
      | "updateThresholdPoints"
      | "updateTokenURI"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "bunnyMintingStation",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "canClaim", values: [string]): string;
  encodeFunctionData(functionFragment: "endBlock", values?: undefined): string;
  encodeFunctionData(functionFragment: "hasClaimed", values: [string]): string;
  encodeFunctionData(functionFragment: "mintNFT", values?: undefined): string;
  encodeFunctionData(functionFragment: "nftId", values?: undefined): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "pancakeProfile",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "pancakeProfileThresholdPoints",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "tokenURI", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "updateEndBlock",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "updateThresholdPoints",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "updateTokenURI",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "bunnyMintingStation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "canClaim", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "endBlock", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "hasClaimed", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "mintNFT", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "nftId", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "pancakeProfile",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "pancakeProfileThresholdPoints",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "tokenURI", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateEndBlock",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateThresholdPoints",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateTokenURI",
    data: BytesLike
  ): Result;

  events: {
    "BunnyMint(address,uint256,uint8)": EventFragment;
    "NewEndBlock(uint256)": EventFragment;
    "NewPancakeProfileThresholdPoints(uint256)": EventFragment;
    "NewTokenURI(string)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "BunnyMint"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NewEndBlock"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "NewPancakeProfileThresholdPoints"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NewTokenURI"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export interface BunnyMintEventObject {
  to: string;
  tokenId: BigNumber;
  bunnyId: number;
}
export type BunnyMintEvent = TypedEvent<
  [string, BigNumber, number],
  BunnyMintEventObject
>;

export type BunnyMintEventFilter = TypedEventFilter<BunnyMintEvent>;

export interface NewEndBlockEventObject {
  endBlock: BigNumber;
}
export type NewEndBlockEvent = TypedEvent<[BigNumber], NewEndBlockEventObject>;

export type NewEndBlockEventFilter = TypedEventFilter<NewEndBlockEvent>;

export interface NewPancakeProfileThresholdPointsEventObject {
  thresholdPoints: BigNumber;
}
export type NewPancakeProfileThresholdPointsEvent = TypedEvent<
  [BigNumber],
  NewPancakeProfileThresholdPointsEventObject
>;

export type NewPancakeProfileThresholdPointsEventFilter =
  TypedEventFilter<NewPancakeProfileThresholdPointsEvent>;

export interface NewTokenURIEventObject {
  tokenURI: string;
}
export type NewTokenURIEvent = TypedEvent<[string], NewTokenURIEventObject>;

export type NewTokenURIEventFilter = TypedEventFilter<NewTokenURIEvent>;

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  OwnershipTransferredEventObject
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface BunnySpecialXmas extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: BunnySpecialXmasInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    bunnyMintingStation(overrides?: CallOverrides): Promise<[string]>;

    canClaim(
      _userAddress: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    endBlock(overrides?: CallOverrides): Promise<[BigNumber]>;

    hasClaimed(arg0: string, overrides?: CallOverrides): Promise<[boolean]>;

    mintNFT(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    nftId(overrides?: CallOverrides): Promise<[number]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    pancakeProfile(overrides?: CallOverrides): Promise<[string]>;

    pancakeProfileThresholdPoints(
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    tokenURI(overrides?: CallOverrides): Promise<[string]>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    updateEndBlock(
      _newEndBlock: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    updateThresholdPoints(
      _newThresholdPoints: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    updateTokenURI(
      _newTokenURI: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  bunnyMintingStation(overrides?: CallOverrides): Promise<string>;

  canClaim(_userAddress: string, overrides?: CallOverrides): Promise<boolean>;

  endBlock(overrides?: CallOverrides): Promise<BigNumber>;

  hasClaimed(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  mintNFT(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  nftId(overrides?: CallOverrides): Promise<number>;

  owner(overrides?: CallOverrides): Promise<string>;

  pancakeProfile(overrides?: CallOverrides): Promise<string>;

  pancakeProfileThresholdPoints(overrides?: CallOverrides): Promise<BigNumber>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  tokenURI(overrides?: CallOverrides): Promise<string>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  updateEndBlock(
    _newEndBlock: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  updateThresholdPoints(
    _newThresholdPoints: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  updateTokenURI(
    _newTokenURI: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    bunnyMintingStation(overrides?: CallOverrides): Promise<string>;

    canClaim(_userAddress: string, overrides?: CallOverrides): Promise<boolean>;

    endBlock(overrides?: CallOverrides): Promise<BigNumber>;

    hasClaimed(arg0: string, overrides?: CallOverrides): Promise<boolean>;

    mintNFT(overrides?: CallOverrides): Promise<void>;

    nftId(overrides?: CallOverrides): Promise<number>;

    owner(overrides?: CallOverrides): Promise<string>;

    pancakeProfile(overrides?: CallOverrides): Promise<string>;

    pancakeProfileThresholdPoints(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    tokenURI(overrides?: CallOverrides): Promise<string>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    updateEndBlock(
      _newEndBlock: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    updateThresholdPoints(
      _newThresholdPoints: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    updateTokenURI(
      _newTokenURI: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "BunnyMint(address,uint256,uint8)"(
      to?: string | null,
      tokenId?: BigNumberish | null,
      bunnyId?: BigNumberish | null
    ): BunnyMintEventFilter;
    BunnyMint(
      to?: string | null,
      tokenId?: BigNumberish | null,
      bunnyId?: BigNumberish | null
    ): BunnyMintEventFilter;

    "NewEndBlock(uint256)"(endBlock?: null): NewEndBlockEventFilter;
    NewEndBlock(endBlock?: null): NewEndBlockEventFilter;

    "NewPancakeProfileThresholdPoints(uint256)"(
      thresholdPoints?: null
    ): NewPancakeProfileThresholdPointsEventFilter;
    NewPancakeProfileThresholdPoints(
      thresholdPoints?: null
    ): NewPancakeProfileThresholdPointsEventFilter;

    "NewTokenURI(string)"(tokenURI?: null): NewTokenURIEventFilter;
    NewTokenURI(tokenURI?: null): NewTokenURIEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
  };

  estimateGas: {
    bunnyMintingStation(overrides?: CallOverrides): Promise<BigNumber>;

    canClaim(
      _userAddress: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    endBlock(overrides?: CallOverrides): Promise<BigNumber>;

    hasClaimed(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    mintNFT(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    nftId(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    pancakeProfile(overrides?: CallOverrides): Promise<BigNumber>;

    pancakeProfileThresholdPoints(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    tokenURI(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    updateEndBlock(
      _newEndBlock: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    updateThresholdPoints(
      _newThresholdPoints: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    updateTokenURI(
      _newTokenURI: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    bunnyMintingStation(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    canClaim(
      _userAddress: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    endBlock(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    hasClaimed(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    mintNFT(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    nftId(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pancakeProfile(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pancakeProfileThresholdPoints(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    tokenURI(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    updateEndBlock(
      _newEndBlock: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    updateThresholdPoints(
      _newThresholdPoints: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    updateTokenURI(
      _newTokenURI: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
