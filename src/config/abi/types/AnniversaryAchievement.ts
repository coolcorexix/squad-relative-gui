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

export interface AnniversaryAchievementInterface extends utils.Interface {
  functions: {
    "campaignId()": FunctionFragment;
    "canClaim(address)": FunctionFragment;
    "changeCampaignId(uint256)": FunctionFragment;
    "changeEndBlock(uint256)": FunctionFragment;
    "changeNumberPointsAndThreshold(uint256,uint256)": FunctionFragment;
    "claimAnniversaryPoints()": FunctionFragment;
    "endBlock()": FunctionFragment;
    "hasClaimed(address)": FunctionFragment;
    "numberPoints()": FunctionFragment;
    "owner()": FunctionFragment;
    "pancakeProfile()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "thresholdPoints()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "campaignId"
      | "canClaim"
      | "changeCampaignId"
      | "changeEndBlock"
      | "changeNumberPointsAndThreshold"
      | "claimAnniversaryPoints"
      | "endBlock"
      | "hasClaimed"
      | "numberPoints"
      | "owner"
      | "pancakeProfile"
      | "renounceOwnership"
      | "thresholdPoints"
      | "transferOwnership"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "campaignId",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "canClaim", values: [string]): string;
  encodeFunctionData(
    functionFragment: "changeCampaignId",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "changeEndBlock",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "changeNumberPointsAndThreshold",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "claimAnniversaryPoints",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "endBlock", values?: undefined): string;
  encodeFunctionData(functionFragment: "hasClaimed", values: [string]): string;
  encodeFunctionData(
    functionFragment: "numberPoints",
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
    functionFragment: "thresholdPoints",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;

  decodeFunctionResult(functionFragment: "campaignId", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "canClaim", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "changeCampaignId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "changeEndBlock",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "changeNumberPointsAndThreshold",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "claimAnniversaryPoints",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "endBlock", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "hasClaimed", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "numberPoints",
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
    functionFragment: "thresholdPoints",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;

  events: {
    "NewCampaignId(uint256)": EventFragment;
    "NewEndBlock(uint256)": EventFragment;
    "NewNumberPointsAndThreshold(uint256,uint256)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "NewCampaignId"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NewEndBlock"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "NewNumberPointsAndThreshold"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export interface NewCampaignIdEventObject {
  campaignId: BigNumber;
}
export type NewCampaignIdEvent = TypedEvent<
  [BigNumber],
  NewCampaignIdEventObject
>;

export type NewCampaignIdEventFilter = TypedEventFilter<NewCampaignIdEvent>;

export interface NewEndBlockEventObject {
  endBlock: BigNumber;
}
export type NewEndBlockEvent = TypedEvent<[BigNumber], NewEndBlockEventObject>;

export type NewEndBlockEventFilter = TypedEventFilter<NewEndBlockEvent>;

export interface NewNumberPointsAndThresholdEventObject {
  numberPoints: BigNumber;
  thresholdPoints: BigNumber;
}
export type NewNumberPointsAndThresholdEvent = TypedEvent<
  [BigNumber, BigNumber],
  NewNumberPointsAndThresholdEventObject
>;

export type NewNumberPointsAndThresholdEventFilter =
  TypedEventFilter<NewNumberPointsAndThresholdEvent>;

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

export interface AnniversaryAchievement extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: AnniversaryAchievementInterface;

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
    campaignId(overrides?: CallOverrides): Promise<[BigNumber]>;

    canClaim(_user: string, overrides?: CallOverrides): Promise<[boolean]>;

    changeCampaignId(
      _campaignId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    changeEndBlock(
      _endBlock: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    changeNumberPointsAndThreshold(
      _numberPoints: BigNumberish,
      _thresholdPoints: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    claimAnniversaryPoints(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    endBlock(overrides?: CallOverrides): Promise<[BigNumber]>;

    hasClaimed(arg0: string, overrides?: CallOverrides): Promise<[boolean]>;

    numberPoints(overrides?: CallOverrides): Promise<[BigNumber]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    pancakeProfile(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    thresholdPoints(overrides?: CallOverrides): Promise<[BigNumber]>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  campaignId(overrides?: CallOverrides): Promise<BigNumber>;

  canClaim(_user: string, overrides?: CallOverrides): Promise<boolean>;

  changeCampaignId(
    _campaignId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  changeEndBlock(
    _endBlock: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  changeNumberPointsAndThreshold(
    _numberPoints: BigNumberish,
    _thresholdPoints: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  claimAnniversaryPoints(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  endBlock(overrides?: CallOverrides): Promise<BigNumber>;

  hasClaimed(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  numberPoints(overrides?: CallOverrides): Promise<BigNumber>;

  owner(overrides?: CallOverrides): Promise<string>;

  pancakeProfile(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  thresholdPoints(overrides?: CallOverrides): Promise<BigNumber>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    campaignId(overrides?: CallOverrides): Promise<BigNumber>;

    canClaim(_user: string, overrides?: CallOverrides): Promise<boolean>;

    changeCampaignId(
      _campaignId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    changeEndBlock(
      _endBlock: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    changeNumberPointsAndThreshold(
      _numberPoints: BigNumberish,
      _thresholdPoints: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    claimAnniversaryPoints(overrides?: CallOverrides): Promise<void>;

    endBlock(overrides?: CallOverrides): Promise<BigNumber>;

    hasClaimed(arg0: string, overrides?: CallOverrides): Promise<boolean>;

    numberPoints(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<string>;

    pancakeProfile(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    thresholdPoints(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "NewCampaignId(uint256)"(campaignId?: null): NewCampaignIdEventFilter;
    NewCampaignId(campaignId?: null): NewCampaignIdEventFilter;

    "NewEndBlock(uint256)"(endBlock?: null): NewEndBlockEventFilter;
    NewEndBlock(endBlock?: null): NewEndBlockEventFilter;

    "NewNumberPointsAndThreshold(uint256,uint256)"(
      numberPoints?: null,
      thresholdPoints?: null
    ): NewNumberPointsAndThresholdEventFilter;
    NewNumberPointsAndThreshold(
      numberPoints?: null,
      thresholdPoints?: null
    ): NewNumberPointsAndThresholdEventFilter;

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
    campaignId(overrides?: CallOverrides): Promise<BigNumber>;

    canClaim(_user: string, overrides?: CallOverrides): Promise<BigNumber>;

    changeCampaignId(
      _campaignId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    changeEndBlock(
      _endBlock: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    changeNumberPointsAndThreshold(
      _numberPoints: BigNumberish,
      _thresholdPoints: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    claimAnniversaryPoints(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    endBlock(overrides?: CallOverrides): Promise<BigNumber>;

    hasClaimed(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    numberPoints(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    pancakeProfile(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    thresholdPoints(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    campaignId(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    canClaim(
      _user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    changeCampaignId(
      _campaignId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    changeEndBlock(
      _endBlock: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    changeNumberPointsAndThreshold(
      _numberPoints: BigNumberish,
      _thresholdPoints: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    claimAnniversaryPoints(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    endBlock(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    hasClaimed(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    numberPoints(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pancakeProfile(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    thresholdPoints(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
