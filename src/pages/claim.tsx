import { useWeb3React } from "@web3-react/core";
import { Page } from "components/Layout";
import { NextPage } from "next";
import { useProfileForAddress } from "state/profile/hooks";
import { useNftsForAddress } from "views/Nft/market/hooks/useNftsForAddress";
import UserNfts from "views/Nft/market/Profile/components/UserNfts";

const Claim: NextPage = () => {
  const { account } = useWeb3React();
  const { profile, isValidating: isProfileFetching } = useProfileForAddress(
    account,
    {
      revalidateIfStale: true,
      revalidateOnFocus: true,
      revalidateOnReconnect: true,
    }
  );
  const {
    data: nfts,
    isLoading,
  } = useNftsForAddress(account, profile, isProfileFetching);
  return (
    <Page style={{ minHeight: '75vh' }}>
      <UserNfts nfts={nfts} isLoading={isLoading} />
    </Page>
  );
};

export default Claim;
