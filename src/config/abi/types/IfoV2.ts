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

export interface IfoV2Interface extends utils.Interface {
  functions: {
    "adminAddress()": FunctionFragment;
    "campaignId()": FunctionFragment;
    "depositPool(uint256,uint8)": FunctionFragment;
    "endBlock()": FunctionFragment;
    "finalWithdraw(uint256,uint256)": FunctionFragment;
    "harvestPool(uint8)": FunctionFragment;
    "lpToken()": FunctionFragment;
    "numberPoints()": FunctionFragment;
    "numberPools()": FunctionFragment;
    "offeringToken()": FunctionFragment;
    "pancakeProfile()": FunctionFragment;
    "setPool(uint256,uint256,uint256,bool,uint8)": FunctionFragment;
    "startBlock()": FunctionFragment;
    "thresholdPoints()": FunctionFragment;
    "updatePointParameters(uint256,uint256,uint256)": FunctionFragment;
    "viewPoolInformation(uint256)": FunctionFragment;
    "viewPoolTaxRateOverflow(uint256)": FunctionFragment;
    "viewUserAllocationPools(address,uint8[])": FunctionFragment;
    "viewUserInfo(address,uint8[])": FunctionFragment;
    "viewUserOfferingAndRefundingAmountsForPools(address,uint8[])": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "adminAddress"
      | "campaignId"
      | "depositPool"
      | "endBlock"
      | "finalWithdraw"
      | "harvestPool"
      | "lpToken"
      | "numberPoints"
      | "numberPools"
      | "offeringToken"
      | "pancakeProfile"
      | "setPool"
      | "startBlock"
      | "thresholdPoints"
      | "updatePointParameters"
      | "viewPoolInformation"
      | "viewPoolTaxRateOverflow"
      | "viewUserAllocationPools"
      | "viewUserInfo"
      | "viewUserOfferingAndRefundingAmountsForPools"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "adminAddress",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "campaignId",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "depositPool",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "endBlock", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "finalWithdraw",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "harvestPool",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "lpToken", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "numberPoints",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "numberPools",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "offeringToken",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "pancakeProfile",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setPool",
    values: [BigNumberish, BigNumberish, BigNumberish, boolean, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "startBlock",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "thresholdPoints",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "updatePointParameters",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "viewPoolInformation",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "viewPoolTaxRateOverflow",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "viewUserAllocationPools",
    values: [string, BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "viewUserInfo",
    values: [string, BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "viewUserOfferingAndRefundingAmountsForPools",
    values: [string, BigNumberish[]]
  ): string;

  decodeFunctionResult(
    functionFragment: "adminAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "campaignId", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "depositPool",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "endBlock", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "finalWithdraw",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "harvestPool",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "lpToken", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "numberPoints",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "numberPools",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "offeringToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "pancakeProfile",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setPool", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "startBlock", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "thresholdPoints",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updatePointParameters",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "viewPoolInformation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "viewPoolTaxRateOverflow",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "viewUserAllocationPools",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "viewUserInfo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "viewUserOfferingAndRefundingAmountsForPools",
    data: BytesLike
  ): Result;

  events: {
    "Deposit(address,uint256,uint8)": EventFragment;
    "Harvest(address,uint256,uint256,uint8)": EventFragment;
    "PointParametersSet(uint256,uint256,uint256)": EventFragment;
    "PoolParametersSet(uint256,uint256,uint8)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Deposit"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Harvest"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PointParametersSet"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PoolParametersSet"): EventFragment;
}

export interface DepositEventObject {
  user: string;
  amount: BigNumber;
  pid: number;
}
export type DepositEvent = TypedEvent<
  [string, BigNumber, number],
  DepositEventObject
>;

export type DepositEventFilter = TypedEventFilter<DepositEvent>;

export interface HarvestEventObject {
  user: string;
  offeringAmount: BigNumber;
  excessAmount: BigNumber;
  pid: number;
}
export type HarvestEvent = TypedEvent<
  [string, BigNumber, BigNumber, number],
  HarvestEventObject
>;

export type HarvestEventFilter = TypedEventFilter<HarvestEvent>;

export interface PointParametersSetEventObject {
  campaignId: BigNumber;
  numberPoints: BigNumber;
  thresholdPoints: BigNumber;
}
export type PointParametersSetEvent = TypedEvent<
  [BigNumber, BigNumber, BigNumber],
  PointParametersSetEventObject
>;

export type PointParametersSetEventFilter =
  TypedEventFilter<PointParametersSetEvent>;

export interface PoolParametersSetEventObject {
  offeringAmountPool: BigNumber;
  raisingAmountPool: BigNumber;
  pid: number;
}
export type PoolParametersSetEvent = TypedEvent<
  [BigNumber, BigNumber, number],
  PoolParametersSetEventObject
>;

export type PoolParametersSetEventFilter =
  TypedEventFilter<PoolParametersSetEvent>;

export interface IfoV2 extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IfoV2Interface;

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
    adminAddress(overrides?: CallOverrides): Promise<[string]>;

    campaignId(overrides?: CallOverrides): Promise<[BigNumber]>;

    depositPool(
      _amount: BigNumberish,
      _pid: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    endBlock(overrides?: CallOverrides): Promise<[BigNumber]>;

    finalWithdraw(
      _lpAmount: BigNumberish,
      _offerAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    harvestPool(
      _pid: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    lpToken(overrides?: CallOverrides): Promise<[string]>;

    numberPoints(overrides?: CallOverrides): Promise<[BigNumber]>;

    numberPools(overrides?: CallOverrides): Promise<[number]>;

    offeringToken(overrides?: CallOverrides): Promise<[string]>;

    pancakeProfile(overrides?: CallOverrides): Promise<[string]>;

    setPool(
      _offeringAmountPool: BigNumberish,
      _raisingAmountPool: BigNumberish,
      _limitPerUserInLP: BigNumberish,
      _hasTax: boolean,
      _pid: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    startBlock(overrides?: CallOverrides): Promise<[BigNumber]>;

    thresholdPoints(overrides?: CallOverrides): Promise<[BigNumber]>;

    updatePointParameters(
      _campaignId: BigNumberish,
      _numberPoints: BigNumberish,
      _thresholdPoints: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    viewPoolInformation(
      _pid: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, boolean, BigNumber, BigNumber]
    >;

    viewPoolTaxRateOverflow(
      _pid: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    viewUserAllocationPools(
      _user: string,
      _pids: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<[BigNumber[]]>;

    viewUserInfo(
      _user: string,
      _pids: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<[BigNumber[], boolean[]]>;

    viewUserOfferingAndRefundingAmountsForPools(
      _user: string,
      _pids: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<[[BigNumber, BigNumber, BigNumber][]]>;
  };

  adminAddress(overrides?: CallOverrides): Promise<string>;

  campaignId(overrides?: CallOverrides): Promise<BigNumber>;

  depositPool(
    _amount: BigNumberish,
    _pid: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  endBlock(overrides?: CallOverrides): Promise<BigNumber>;

  finalWithdraw(
    _lpAmount: BigNumberish,
    _offerAmount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  harvestPool(
    _pid: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  lpToken(overrides?: CallOverrides): Promise<string>;

  numberPoints(overrides?: CallOverrides): Promise<BigNumber>;

  numberPools(overrides?: CallOverrides): Promise<number>;

  offeringToken(overrides?: CallOverrides): Promise<string>;

  pancakeProfile(overrides?: CallOverrides): Promise<string>;

  setPool(
    _offeringAmountPool: BigNumberish,
    _raisingAmountPool: BigNumberish,
    _limitPerUserInLP: BigNumberish,
    _hasTax: boolean,
    _pid: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  startBlock(overrides?: CallOverrides): Promise<BigNumber>;

  thresholdPoints(overrides?: CallOverrides): Promise<BigNumber>;

  updatePointParameters(
    _campaignId: BigNumberish,
    _numberPoints: BigNumberish,
    _thresholdPoints: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  viewPoolInformation(
    _pid: BigNumberish,
    overrides?: CallOverrides
  ): Promise<[BigNumber, BigNumber, BigNumber, boolean, BigNumber, BigNumber]>;

  viewPoolTaxRateOverflow(
    _pid: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  viewUserAllocationPools(
    _user: string,
    _pids: BigNumberish[],
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  viewUserInfo(
    _user: string,
    _pids: BigNumberish[],
    overrides?: CallOverrides
  ): Promise<[BigNumber[], boolean[]]>;

  viewUserOfferingAndRefundingAmountsForPools(
    _user: string,
    _pids: BigNumberish[],
    overrides?: CallOverrides
  ): Promise<[BigNumber, BigNumber, BigNumber][]>;

  callStatic: {
    adminAddress(overrides?: CallOverrides): Promise<string>;

    campaignId(overrides?: CallOverrides): Promise<BigNumber>;

    depositPool(
      _amount: BigNumberish,
      _pid: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    endBlock(overrides?: CallOverrides): Promise<BigNumber>;

    finalWithdraw(
      _lpAmount: BigNumberish,
      _offerAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    harvestPool(_pid: BigNumberish, overrides?: CallOverrides): Promise<void>;

    lpToken(overrides?: CallOverrides): Promise<string>;

    numberPoints(overrides?: CallOverrides): Promise<BigNumber>;

    numberPools(overrides?: CallOverrides): Promise<number>;

    offeringToken(overrides?: CallOverrides): Promise<string>;

    pancakeProfile(overrides?: CallOverrides): Promise<string>;

    setPool(
      _offeringAmountPool: BigNumberish,
      _raisingAmountPool: BigNumberish,
      _limitPerUserInLP: BigNumberish,
      _hasTax: boolean,
      _pid: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    startBlock(overrides?: CallOverrides): Promise<BigNumber>;

    thresholdPoints(overrides?: CallOverrides): Promise<BigNumber>;

    updatePointParameters(
      _campaignId: BigNumberish,
      _numberPoints: BigNumberish,
      _thresholdPoints: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    viewPoolInformation(
      _pid: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, boolean, BigNumber, BigNumber]
    >;

    viewPoolTaxRateOverflow(
      _pid: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    viewUserAllocationPools(
      _user: string,
      _pids: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    viewUserInfo(
      _user: string,
      _pids: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<[BigNumber[], boolean[]]>;

    viewUserOfferingAndRefundingAmountsForPools(
      _user: string,
      _pids: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber, BigNumber][]>;
  };

  filters: {
    "Deposit(address,uint256,uint8)"(
      user?: string | null,
      amount?: null,
      pid?: BigNumberish | null
    ): DepositEventFilter;
    Deposit(
      user?: string | null,
      amount?: null,
      pid?: BigNumberish | null
    ): DepositEventFilter;

    "Harvest(address,uint256,uint256,uint8)"(
      user?: string | null,
      offeringAmount?: null,
      excessAmount?: null,
      pid?: BigNumberish | null
    ): HarvestEventFilter;
    Harvest(
      user?: string | null,
      offeringAmount?: null,
      excessAmount?: null,
      pid?: BigNumberish | null
    ): HarvestEventFilter;

    "PointParametersSet(uint256,uint256,uint256)"(
      campaignId?: null,
      numberPoints?: null,
      thresholdPoints?: null
    ): PointParametersSetEventFilter;
    PointParametersSet(
      campaignId?: null,
      numberPoints?: null,
      thresholdPoints?: null
    ): PointParametersSetEventFilter;

    "PoolParametersSet(uint256,uint256,uint8)"(
      offeringAmountPool?: null,
      raisingAmountPool?: null,
      pid?: null
    ): PoolParametersSetEventFilter;
    PoolParametersSet(
      offeringAmountPool?: null,
      raisingAmountPool?: null,
      pid?: null
    ): PoolParametersSetEventFilter;
  };

  estimateGas: {
    adminAddress(overrides?: CallOverrides): Promise<BigNumber>;

    campaignId(overrides?: CallOverrides): Promise<BigNumber>;

    depositPool(
      _amount: BigNumberish,
      _pid: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    endBlock(overrides?: CallOverrides): Promise<BigNumber>;

    finalWithdraw(
      _lpAmount: BigNumberish,
      _offerAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    harvestPool(
      _pid: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    lpToken(overrides?: CallOverrides): Promise<BigNumber>;

    numberPoints(overrides?: CallOverrides): Promise<BigNumber>;

    numberPools(overrides?: CallOverrides): Promise<BigNumber>;

    offeringToken(overrides?: CallOverrides): Promise<BigNumber>;

    pancakeProfile(overrides?: CallOverrides): Promise<BigNumber>;

    setPool(
      _offeringAmountPool: BigNumberish,
      _raisingAmountPool: BigNumberish,
      _limitPerUserInLP: BigNumberish,
      _hasTax: boolean,
      _pid: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    startBlock(overrides?: CallOverrides): Promise<BigNumber>;

    thresholdPoints(overrides?: CallOverrides): Promise<BigNumber>;

    updatePointParameters(
      _campaignId: BigNumberish,
      _numberPoints: BigNumberish,
      _thresholdPoints: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    viewPoolInformation(
      _pid: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    viewPoolTaxRateOverflow(
      _pid: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    viewUserAllocationPools(
      _user: string,
      _pids: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    viewUserInfo(
      _user: string,
      _pids: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    viewUserOfferingAndRefundingAmountsForPools(
      _user: string,
      _pids: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    adminAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    campaignId(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    depositPool(
      _amount: BigNumberish,
      _pid: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    endBlock(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    finalWithdraw(
      _lpAmount: BigNumberish,
      _offerAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    harvestPool(
      _pid: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    lpToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    numberPoints(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    numberPools(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    offeringToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pancakeProfile(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setPool(
      _offeringAmountPool: BigNumberish,
      _raisingAmountPool: BigNumberish,
      _limitPerUserInLP: BigNumberish,
      _hasTax: boolean,
      _pid: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    startBlock(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    thresholdPoints(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    updatePointParameters(
      _campaignId: BigNumberish,
      _numberPoints: BigNumberish,
      _thresholdPoints: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    viewPoolInformation(
      _pid: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    viewPoolTaxRateOverflow(
      _pid: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    viewUserAllocationPools(
      _user: string,
      _pids: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    viewUserInfo(
      _user: string,
      _pids: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    viewUserOfferingAndRefundingAmountsForPools(
      _user: string,
      _pids: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
