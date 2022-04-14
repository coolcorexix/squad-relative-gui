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

export interface BunnyFactoryInterface extends utils.Interface {
  functions: {
    "bunnyFactoryV2()": FunctionFragment;
    "bunnyMintingStation()": FunctionFragment;
    "cakeToken()": FunctionFragment;
    "canMint(address)": FunctionFragment;
    "claimFee(uint256)": FunctionFragment;
    "hasClaimed(address)": FunctionFragment;
    "mintNFT(uint8)": FunctionFragment;
    "owner()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "setBunnyJson(string,string,string,string,string)": FunctionFragment;
    "setStartBlockNumber(uint256)": FunctionFragment;
    "startBlockNumber()": FunctionFragment;
    "tokenPrice()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "updateTokenPrice(uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "bunnyFactoryV2"
      | "bunnyMintingStation"
      | "cakeToken"
      | "canMint"
      | "claimFee"
      | "hasClaimed"
      | "mintNFT"
      | "owner"
      | "renounceOwnership"
      | "setBunnyJson"
      | "setStartBlockNumber"
      | "startBlockNumber"
      | "tokenPrice"
      | "transferOwnership"
      | "updateTokenPrice"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "bunnyFactoryV2",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "bunnyMintingStation",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "cakeToken", values?: undefined): string;
  encodeFunctionData(functionFragment: "canMint", values: [string]): string;
  encodeFunctionData(
    functionFragment: "claimFee",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "hasClaimed", values: [string]): string;
  encodeFunctionData(
    functionFragment: "mintNFT",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setBunnyJson",
    values: [string, string, string, string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "setStartBlockNumber",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "startBlockNumber",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "tokenPrice",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "updateTokenPrice",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "bunnyFactoryV2",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "bunnyMintingStation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "cakeToken", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "canMint", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "claimFee", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "hasClaimed", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "mintNFT", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setBunnyJson",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setStartBlockNumber",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "startBlockNumber",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "tokenPrice", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateTokenPrice",
    data: BytesLike
  ): Result;

  events: {
    "BunnyMint(address,uint256,uint8)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "BunnyMint"): EventFragment;
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

export interface BunnyFactory extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: BunnyFactoryInterface;

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
    bunnyFactoryV2(overrides?: CallOverrides): Promise<[string]>;

    bunnyMintingStation(overrides?: CallOverrides): Promise<[string]>;

    cakeToken(overrides?: CallOverrides): Promise<[string]>;

    canMint(userAddress: string, overrides?: CallOverrides): Promise<[boolean]>;

    claimFee(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    hasClaimed(arg0: string, overrides?: CallOverrides): Promise<[boolean]>;

    mintNFT(
      _bunnyId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setBunnyJson(
      _bunnyId5Json: string,
      _bunnyId6Json: string,
      _bunnyId7Json: string,
      _bunnyId8Json: string,
      _bunnyId9Json: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setStartBlockNumber(
      _newStartBlockNumber: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    startBlockNumber(overrides?: CallOverrides): Promise<[BigNumber]>;

    tokenPrice(overrides?: CallOverrides): Promise<[BigNumber]>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    updateTokenPrice(
      _newTokenPrice: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  bunnyFactoryV2(overrides?: CallOverrides): Promise<string>;

  bunnyMintingStation(overrides?: CallOverrides): Promise<string>;

  cakeToken(overrides?: CallOverrides): Promise<string>;

  canMint(userAddress: string, overrides?: CallOverrides): Promise<boolean>;

  claimFee(
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  hasClaimed(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  mintNFT(
    _bunnyId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setBunnyJson(
    _bunnyId5Json: string,
    _bunnyId6Json: string,
    _bunnyId7Json: string,
    _bunnyId8Json: string,
    _bunnyId9Json: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setStartBlockNumber(
    _newStartBlockNumber: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  startBlockNumber(overrides?: CallOverrides): Promise<BigNumber>;

  tokenPrice(overrides?: CallOverrides): Promise<BigNumber>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  updateTokenPrice(
    _newTokenPrice: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    bunnyFactoryV2(overrides?: CallOverrides): Promise<string>;

    bunnyMintingStation(overrides?: CallOverrides): Promise<string>;

    cakeToken(overrides?: CallOverrides): Promise<string>;

    canMint(userAddress: string, overrides?: CallOverrides): Promise<boolean>;

    claimFee(_amount: BigNumberish, overrides?: CallOverrides): Promise<void>;

    hasClaimed(arg0: string, overrides?: CallOverrides): Promise<boolean>;

    mintNFT(_bunnyId: BigNumberish, overrides?: CallOverrides): Promise<void>;

    owner(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    setBunnyJson(
      _bunnyId5Json: string,
      _bunnyId6Json: string,
      _bunnyId7Json: string,
      _bunnyId8Json: string,
      _bunnyId9Json: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setStartBlockNumber(
      _newStartBlockNumber: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    startBlockNumber(overrides?: CallOverrides): Promise<BigNumber>;

    tokenPrice(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    updateTokenPrice(
      _newTokenPrice: BigNumberish,
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
    bunnyFactoryV2(overrides?: CallOverrides): Promise<BigNumber>;

    bunnyMintingStation(overrides?: CallOverrides): Promise<BigNumber>;

    cakeToken(overrides?: CallOverrides): Promise<BigNumber>;

    canMint(userAddress: string, overrides?: CallOverrides): Promise<BigNumber>;

    claimFee(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    hasClaimed(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    mintNFT(
      _bunnyId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setBunnyJson(
      _bunnyId5Json: string,
      _bunnyId6Json: string,
      _bunnyId7Json: string,
      _bunnyId8Json: string,
      _bunnyId9Json: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setStartBlockNumber(
      _newStartBlockNumber: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    startBlockNumber(overrides?: CallOverrides): Promise<BigNumber>;

    tokenPrice(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    updateTokenPrice(
      _newTokenPrice: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    bunnyFactoryV2(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    bunnyMintingStation(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    cakeToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    canMint(
      userAddress: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    claimFee(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    hasClaimed(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    mintNFT(
      _bunnyId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setBunnyJson(
      _bunnyId5Json: string,
      _bunnyId6Json: string,
      _bunnyId7Json: string,
      _bunnyId8Json: string,
      _bunnyId9Json: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setStartBlockNumber(
      _newStartBlockNumber: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    startBlockNumber(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    tokenPrice(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    updateTokenPrice(
      _newTokenPrice: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
