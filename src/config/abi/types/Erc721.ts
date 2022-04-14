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

export interface Erc721Interface extends utils.Interface {
  functions: {
    "name()": FunctionFragment;
    "getApproved(uint256)": FunctionFragment;
    "approve(address,uint256)": FunctionFragment;
    "implementsERC721()": FunctionFragment;
    "totalSupply()": FunctionFragment;
    "transferFrom(address,address,uint256)": FunctionFragment;
    "tokenOfOwnerByIndex(address,uint256)": FunctionFragment;
    "ownerOf(uint256)": FunctionFragment;
    "tokenMetadata(uint256)": FunctionFragment;
    "balanceOf(address)": FunctionFragment;
    "mint(address,uint256,address,string)": FunctionFragment;
    "symbol()": FunctionFragment;
    "transfer(address,uint256)": FunctionFragment;
    "numTokensTotal()": FunctionFragment;
    "getOwnerTokens(address)": FunctionFragment;
    "tokenURI(uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "name"
      | "getApproved"
      | "approve"
      | "implementsERC721"
      | "totalSupply"
      | "transferFrom"
      | "tokenOfOwnerByIndex"
      | "ownerOf"
      | "tokenMetadata"
      | "balanceOf"
      | "mint"
      | "symbol"
      | "transfer"
      | "numTokensTotal"
      | "getOwnerTokens"
      | "tokenURI"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "name", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getApproved",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "approve",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "implementsERC721",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "totalSupply",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferFrom",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "tokenOfOwnerByIndex",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "ownerOf",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "tokenMetadata",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "balanceOf", values: [string]): string;
  encodeFunctionData(
    functionFragment: "mint",
    values: [string, BigNumberish, string, string]
  ): string;
  encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "transfer",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "numTokensTotal",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getOwnerTokens",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "tokenURI",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getApproved",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "implementsERC721",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalSupply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferFrom",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "tokenOfOwnerByIndex",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "ownerOf", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "tokenMetadata",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "numTokensTotal",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getOwnerTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "tokenURI", data: BytesLike): Result;

  events: {
    "Mint(address,uint256)": EventFragment;
    "Transfer(address,address,uint256)": EventFragment;
    "Approval(address,address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Mint"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Transfer"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Approval"): EventFragment;
}

export interface MintEventObject {
  _to: string;
  _tokenId: BigNumber;
}
export type MintEvent = TypedEvent<[string, BigNumber], MintEventObject>;

export type MintEventFilter = TypedEventFilter<MintEvent>;

export interface TransferEventObject {
  _from: string;
  _to: string;
  _tokenId: BigNumber;
}
export type TransferEvent = TypedEvent<
  [string, string, BigNumber],
  TransferEventObject
>;

export type TransferEventFilter = TypedEventFilter<TransferEvent>;

export interface ApprovalEventObject {
  _owner: string;
  _approved: string;
  _tokenId: BigNumber;
}
export type ApprovalEvent = TypedEvent<
  [string, string, BigNumber],
  ApprovalEventObject
>;

export type ApprovalEventFilter = TypedEventFilter<ApprovalEvent>;

export interface Erc721 extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: Erc721Interface;

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
    name(overrides?: CallOverrides): Promise<[string] & { _name: string }>;

    getApproved(
      _tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string] & { _approved: string }>;

    approve(
      _to: string,
      _tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    implementsERC721(
      overrides?: CallOverrides
    ): Promise<[boolean] & { _implementsERC721: boolean }>;

    totalSupply(
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { _totalSupply: BigNumber }>;

    transferFrom(
      _from: string,
      _to: string,
      _tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    tokenOfOwnerByIndex(
      _owner: string,
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { _tokenId: BigNumber }>;

    ownerOf(
      _tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string] & { _owner: string }>;

    tokenMetadata(
      _tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string] & { _infoUrl: string }>;

    balanceOf(
      _owner: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { _balance: BigNumber }>;

    mint(
      _owner: string,
      _tokenId: BigNumberish,
      _approvedAddress: string,
      _metadata: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    symbol(overrides?: CallOverrides): Promise<[string] & { _symbol: string }>;

    transfer(
      _to: string,
      _tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    numTokensTotal(overrides?: CallOverrides): Promise<[BigNumber]>;

    getOwnerTokens(
      _owner: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber[]] & { _tokenIds: BigNumber[] }>;

    tokenURI(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;
  };

  name(overrides?: CallOverrides): Promise<string>;

  getApproved(
    _tokenId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  approve(
    _to: string,
    _tokenId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  implementsERC721(overrides?: CallOverrides): Promise<boolean>;

  totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

  transferFrom(
    _from: string,
    _to: string,
    _tokenId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  tokenOfOwnerByIndex(
    _owner: string,
    _index: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  ownerOf(_tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>;

  tokenMetadata(
    _tokenId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  balanceOf(_owner: string, overrides?: CallOverrides): Promise<BigNumber>;

  mint(
    _owner: string,
    _tokenId: BigNumberish,
    _approvedAddress: string,
    _metadata: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  symbol(overrides?: CallOverrides): Promise<string>;

  transfer(
    _to: string,
    _tokenId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  numTokensTotal(overrides?: CallOverrides): Promise<BigNumber>;

  getOwnerTokens(
    _owner: string,
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  tokenURI(tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>;

  callStatic: {
    name(overrides?: CallOverrides): Promise<string>;

    getApproved(
      _tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    approve(
      _to: string,
      _tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    implementsERC721(overrides?: CallOverrides): Promise<boolean>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    transferFrom(
      _from: string,
      _to: string,
      _tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    tokenOfOwnerByIndex(
      _owner: string,
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    ownerOf(_tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>;

    tokenMetadata(
      _tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    balanceOf(_owner: string, overrides?: CallOverrides): Promise<BigNumber>;

    mint(
      _owner: string,
      _tokenId: BigNumberish,
      _approvedAddress: string,
      _metadata: string,
      overrides?: CallOverrides
    ): Promise<void>;

    symbol(overrides?: CallOverrides): Promise<string>;

    transfer(
      _to: string,
      _tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    numTokensTotal(overrides?: CallOverrides): Promise<BigNumber>;

    getOwnerTokens(
      _owner: string,
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    tokenURI(tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    "Mint(address,uint256)"(
      _to?: string | null,
      _tokenId?: BigNumberish | null
    ): MintEventFilter;
    Mint(_to?: string | null, _tokenId?: BigNumberish | null): MintEventFilter;

    "Transfer(address,address,uint256)"(
      _from?: string | null,
      _to?: string | null,
      _tokenId?: null
    ): TransferEventFilter;
    Transfer(
      _from?: string | null,
      _to?: string | null,
      _tokenId?: null
    ): TransferEventFilter;

    "Approval(address,address,uint256)"(
      _owner?: string | null,
      _approved?: string | null,
      _tokenId?: null
    ): ApprovalEventFilter;
    Approval(
      _owner?: string | null,
      _approved?: string | null,
      _tokenId?: null
    ): ApprovalEventFilter;
  };

  estimateGas: {
    name(overrides?: CallOverrides): Promise<BigNumber>;

    getApproved(
      _tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    approve(
      _to: string,
      _tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    implementsERC721(overrides?: CallOverrides): Promise<BigNumber>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    transferFrom(
      _from: string,
      _to: string,
      _tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    tokenOfOwnerByIndex(
      _owner: string,
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    ownerOf(
      _tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    tokenMetadata(
      _tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    balanceOf(_owner: string, overrides?: CallOverrides): Promise<BigNumber>;

    mint(
      _owner: string,
      _tokenId: BigNumberish,
      _approvedAddress: string,
      _metadata: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    symbol(overrides?: CallOverrides): Promise<BigNumber>;

    transfer(
      _to: string,
      _tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    numTokensTotal(overrides?: CallOverrides): Promise<BigNumber>;

    getOwnerTokens(
      _owner: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    tokenURI(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    name(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getApproved(
      _tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    approve(
      _to: string,
      _tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    implementsERC721(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferFrom(
      _from: string,
      _to: string,
      _tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    tokenOfOwnerByIndex(
      _owner: string,
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    ownerOf(
      _tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    tokenMetadata(
      _tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    balanceOf(
      _owner: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    mint(
      _owner: string,
      _tokenId: BigNumberish,
      _approvedAddress: string,
      _metadata: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transfer(
      _to: string,
      _tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    numTokensTotal(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getOwnerTokens(
      _owner: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    tokenURI(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
