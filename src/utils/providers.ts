import { StaticJsonRpcProvider } from "@ethersproject/providers";
import { getRpcNodeUrl } from "utils/getRpcNodeUrl";

const RPC_URL = getRpcNodeUrl();

export const simpleRpcProvider = new StaticJsonRpcProvider(RPC_URL);

export default null;
