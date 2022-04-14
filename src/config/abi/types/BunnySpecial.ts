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

export interface BunnySpecialInterface extends utils.Interface {
  functions: {
    "addBunny(uint8,string,uint256,uint256)": FunctionFragment;
    "bunnyCharacteristics(uint8)": FunctionFragment;
    "bunnyMintingStation()": FunctionFragment;
    "c_0xf318aee2(bytes32)": FunctionFragment;
    "cakeToken()": FunctionFragment;
    "canClaimMultiple(address,uint8[])": FunctionFragment;
    "canClaimSingle(address,uint8)": FunctionFragment;
    "claimFee(uint256)": FunctionFragment;
    "hasClaimed(address,uint8)": FunctionFragment;
    "maxViewLength()": FunctionFragment;
    "mintNFT(uint8)": FunctionFragment;
    "numberDifferentBunnies()": FunctionFragment;
    "owner()": FunctionFragment;
    "pancakeProfile()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "updateBunny(uint8,uint256,uint256,bool)": FunctionFragment;
    "updateMaxViewLength(uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "addBunny"
      | "bunnyCharacteristics"
      | "bunnyMintingStation"
      | "c_0xf318aee2"
      | "cakeToken"
      | "canClaimMultiple"
      | "canClaimSingle"
      | "claimFee"
      | "hasClaimed"
      | "maxViewLength"
      | "mintNFT"
      | "numberDifferentBunnies"
      | "owner"
      | "pancakeProfile"
      | "renounceOwnership"
      | "transferOwnership"
      | "updateBunny"
      | "updateMaxViewLength"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "addBunny",
    values: [BigNumberish, string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "bunnyCharacteristics",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "bunnyMintingStation",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "c_0xf318aee2",
    values: [BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "cakeToken", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "canClaimMultiple",
    values: [string, BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "canClaimSingle",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "claimFee",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "hasClaimed",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "maxViewLength",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "mintNFT",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "numberDifferentBunnies",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "pancakeProfile",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "updateBunny",
    values: [BigNumberish, BigNumberish, BigNumberish, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "updateMaxViewLength",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "addBunny", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "bunnyCharacteristics",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "bunnyMintingStation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "c_0xf318aee2",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "cakeToken", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "canClaimMultiple",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "canClaimSingle",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "claimFee", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "hasClaimed", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "maxViewLength",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "mintNFT", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "numberDifferentBunnies",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "pancakeProfile",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateBunny",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateMaxViewLength",
    data: BytesLike
  ): Result;

  events: {
    "BunnyAdd(uint8,uint256,uint256)": EventFragment;
    "BunnyChange(uint8,uint256,uint256,bool)": EventFragment;
    "BunnyMint(address,uint256,uint8)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "BunnyAdd"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "BunnyChange"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "BunnyMint"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export interface BunnyAddEventObject {
  bunnyId: number;
  thresholdUser: BigNumber;
  costCake: BigNumber;
}
export type BunnyAddEvent = TypedEvent<
  [number, BigNumber, BigNumber],
  BunnyAddEventObject
>;

export type BunnyAddEventFilter = TypedEventFilter<BunnyAddEvent>;

export interface BunnyChangeEventObject {
  bunnyId: number;
  thresholdUser: BigNumber;
  costCake: BigNumber;
  isActive: boolean;
}
export type BunnyChangeEvent = TypedEvent<
  [number, BigNumber, BigNumber, boolean],
  BunnyChangeEventObject
>;

export type BunnyChangeEventFilter = TypedEventFilter<BunnyChangeEvent>;

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

export interface BunnySpecial extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: BunnySpecialInterface;

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
    addBunny(
      _bunnyId: BigNumberish,
      _tokenURI: string,
      _thresholdUser: BigNumberish,
      _cakeCost: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    bunnyCharacteristics(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [string, BigNumber, BigNumber, boolean, boolean] & {
        tokenURI: string;
        thresholdUser: BigNumber;
        cakeCost: BigNumber;
        isActive: boolean;
        isCreated: boolean;
      }
    >;

    bunnyMintingStation(overrides?: CallOverrides): Promise<[string]>;

    c_0xf318aee2(
      c__0xf318aee2: BytesLike,
      overrides?: CallOverrides
    ): Promise<[void]>;

    cakeToken(overrides?: CallOverrides): Promise<[string]>;

    canClaimMultiple(
      _userAddress: string,
      _bunnyIds: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<[boolean[]]>;

    canClaimSingle(
      _userAddress: string,
      _bunnyId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    claimFee(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    hasClaimed(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    maxViewLength(overrides?: CallOverrides): Promise<[BigNumber]>;

    mintNFT(
      _bunnyId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    numberDifferentBunnies(overrides?: CallOverrides): Promise<[BigNumber]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    pancakeProfile(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    updateBunny(
      _bunnyId: BigNumberish,
      _thresholdUser: BigNumberish,
      _cakeCost: BigNumberish,
      _isActive: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    updateMaxViewLength(
      _newMaxViewLength: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  addBunny(
    _bunnyId: BigNumberish,
    _tokenURI: string,
    _thresholdUser: BigNumberish,
    _cakeCost: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  bunnyCharacteristics(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [string, BigNumber, BigNumber, boolean, boolean] & {
      tokenURI: string;
      thresholdUser: BigNumber;
      cakeCost: BigNumber;
      isActive: boolean;
      isCreated: boolean;
    }
  >;

  bunnyMintingStation(overrides?: CallOverrides): Promise<string>;

  c_0xf318aee2(
    c__0xf318aee2: BytesLike,
    overrides?: CallOverrides
  ): Promise<void>;

  cakeToken(overrides?: CallOverrides): Promise<string>;

  canClaimMultiple(
    _userAddress: string,
    _bunnyIds: BigNumberish[],
    overrides?: CallOverrides
  ): Promise<boolean[]>;

  canClaimSingle(
    _userAddress: string,
    _bunnyId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<boolean>;

  claimFee(
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  hasClaimed(
    arg0: string,
    arg1: BigNumberish,
    overrides?: CallOverrides
  ): Promise<boolean>;

  maxViewLength(overrides?: CallOverrides): Promise<BigNumber>;

  mintNFT(
    _bunnyId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  numberDifferentBunnies(overrides?: CallOverrides): Promise<BigNumber>;

  owner(overrides?: CallOverrides): Promise<string>;

  pancakeProfile(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  updateBunny(
    _bunnyId: BigNumberish,
    _thresholdUser: BigNumberish,
    _cakeCost: BigNumberish,
    _isActive: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  updateMaxViewLength(
    _newMaxViewLength: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    addBunny(
      _bunnyId: BigNumberish,
      _tokenURI: string,
      _thresholdUser: BigNumberish,
      _cakeCost: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    bunnyCharacteristics(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [string, BigNumber, BigNumber, boolean, boolean] & {
        tokenURI: string;
        thresholdUser: BigNumber;
        cakeCost: BigNumber;
        isActive: boolean;
        isCreated: boolean;
      }
    >;

    bunnyMintingStation(overrides?: CallOverrides): Promise<string>;

    c_0xf318aee2(
      c__0xf318aee2: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    cakeToken(overrides?: CallOverrides): Promise<string>;

    canClaimMultiple(
      _userAddress: string,
      _bunnyIds: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<boolean[]>;

    canClaimSingle(
      _userAddress: string,
      _bunnyId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    claimFee(_amount: BigNumberish, overrides?: CallOverrides): Promise<void>;

    hasClaimed(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    maxViewLength(overrides?: CallOverrides): Promise<BigNumber>;

    mintNFT(_bunnyId: BigNumberish, overrides?: CallOverrides): Promise<void>;

    numberDifferentBunnies(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<string>;

    pancakeProfile(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    updateBunny(
      _bunnyId: BigNumberish,
      _thresholdUser: BigNumberish,
      _cakeCost: BigNumberish,
      _isActive: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    updateMaxViewLength(
      _newMaxViewLength: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "BunnyAdd(uint8,uint256,uint256)"(
      bunnyId?: BigNumberish | null,
      thresholdUser?: null,
      costCake?: null
    ): BunnyAddEventFilter;
    BunnyAdd(
      bunnyId?: BigNumberish | null,
      thresholdUser?: null,
      costCake?: null
    ): BunnyAddEventFilter;

    "BunnyChange(uint8,uint256,uint256,bool)"(
      bunnyId?: BigNumberish | null,
      thresholdUser?: null,
      costCake?: null,
      isActive?: null
    ): BunnyChangeEventFilter;
    BunnyChange(
      bunnyId?: BigNumberish | null,
      thresholdUser?: null,
      costCake?: null,
      isActive?: null
    ): BunnyChangeEventFilter;

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
    addBunny(
      _bunnyId: BigNumberish,
      _tokenURI: string,
      _thresholdUser: BigNumberish,
      _cakeCost: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    bunnyCharacteristics(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    bunnyMintingStation(overrides?: CallOverrides): Promise<BigNumber>;

    c_0xf318aee2(
      c__0xf318aee2: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    cakeToken(overrides?: CallOverrides): Promise<BigNumber>;

    canClaimMultiple(
      _userAddress: string,
      _bunnyIds: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    canClaimSingle(
      _userAddress: string,
      _bunnyId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    claimFee(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    hasClaimed(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    maxViewLength(overrides?: CallOverrides): Promise<BigNumber>;

    mintNFT(
      _bunnyId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    numberDifferentBunnies(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    pancakeProfile(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    updateBunny(
      _bunnyId: BigNumberish,
      _thresholdUser: BigNumberish,
      _cakeCost: BigNumberish,
      _isActive: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    updateMaxViewLength(
      _newMaxViewLength: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addBunny(
      _bunnyId: BigNumberish,
      _tokenURI: string,
      _thresholdUser: BigNumberish,
      _cakeCost: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    bunnyCharacteristics(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    bunnyMintingStation(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    c_0xf318aee2(
      c__0xf318aee2: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    cakeToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    canClaimMultiple(
      _userAddress: string,
      _bunnyIds: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    canClaimSingle(
      _userAddress: string,
      _bunnyId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    claimFee(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    hasClaimed(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    maxViewLength(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    mintNFT(
      _bunnyId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    numberDifferentBunnies(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pancakeProfile(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    updateBunny(
      _bunnyId: BigNumberish,
      _thresholdUser: BigNumberish,
      _cakeCost: BigNumberish,
      _isActive: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    updateMaxViewLength(
      _newMaxViewLength: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
