import { useWeb3React } from "@web3-react/core";
import useSWR from "swr";
import { simpleRpcProvider } from "utils/providers";
import { Zero } from "@ethersproject/constants";

export const useGetBnbBalance = () => {
  const { account } = useWeb3React();
  const { status, data, mutate } = useSWR([account, "bnbBalance"], async () => {
    return simpleRpcProvider.getBalance(account);
  });
  return { balance: data || Zero, fetchStatus: status, refresh: mutate };
};
