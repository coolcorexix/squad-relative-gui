import { useEffect, useState } from "react";
import { useWeb3React, UnsupportedChainIdError } from "@web3-react/core";
import {
  Flex,
  LogoutIcon,
  RefreshIcon,
  useModal,
  UserMenu as UIKitUserMenu,
  UserMenuDivider,
  UserMenuItem,
  UserMenuVariant,
  Box,
} from "@pancakeswap/uikit";
import { useAuth } from "hooks/useAuth";
import { useProfile } from "state/profile/hooks";
import { WalletConnectButton } from "components/WalletConnectButton";
import { useGetBnbBalance } from "hooks/useTokenBalance";
import { useTranslation } from "contexts/Localization";
import { nftsBaseUrl } from "views/Nft/market/constants";
import { FetchStatus } from "config/constants/types";
import WalletModal, { WalletView, LOW_BNB_BALANCE } from "./WalletModal";
import ProfileUserMenuItem from "./ProfileUserMenutItem";
import WalletUserMenuItem from "./WalletUserMenuItem";
import { useRouter } from "next/router";

const UserMenu = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const { account, error } = useWeb3React();
  const { logout } = useAuth();
  const { balance, fetchStatus } = useGetBnbBalance();
  // TODO
  const { isInitialized, isLoading, profile } = useProfile();
  const [onPresentWalletModal] = useModal(
    <WalletModal initialView={WalletView.WALLET_INFO} />
  );
  const [onPresentTransactionModal] = useModal(
    <WalletModal initialView={WalletView.TRANSACTIONS} />
  );
  const [onPresentWrongNetworkModal] = useModal(
    <WalletModal initialView={WalletView.WRONG_NETWORK} />
  );
  const hasProfile = isInitialized && !!profile;
  const avatarSrc = profile?.nft?.image?.thumbnail;
  const hasLowBnbBalance =
    fetchStatus === FetchStatus.Fetched && balance.lte(LOW_BNB_BALANCE);
  const [userMenuText, setUserMenuText] = useState<string>("");
  const [userMenuVariable, setUserMenuVariable] =
    useState<UserMenuVariant>("default");
  const isWrongNetwork: boolean =
    error && error instanceof UnsupportedChainIdError;

  const onClickWalletMenu = (): void => {
    if (isWrongNetwork) {
      onPresentWrongNetworkModal();
    } else {
      onPresentWalletModal();
    }
  };

  const UserMenuItems = () => {
    return (
      <>
        <WalletUserMenuItem
          hasLowBnbBalance={hasLowBnbBalance}
          isWrongNetwork={isWrongNetwork}
          onPresentWalletModal={onClickWalletMenu}
        />
        <UserMenuDivider />
        <UserMenuItem
          as="button"
          disabled={isWrongNetwork}
          onClick={() =>
            router.push(`/claim`)
          }
        >
          {t("Your NFTs")}
        </UserMenuItem>
        <ProfileUserMenuItem
          isLoading={isLoading}
          hasProfile={hasProfile}
          disabled={isWrongNetwork}
        />
        <UserMenuDivider />
        <UserMenuItem as="button" onClick={logout}>
          <Flex alignItems="center" justifyContent="space-between" width="100%">
            {t("Disconnect")}
            <LogoutIcon />
          </Flex>
        </UserMenuItem>
      </>
    );
  };

  if (account) {
    return (
      <UIKitUserMenu
        account={account}
        avatarSrc={avatarSrc}
        text={userMenuText}
        variant={userMenuVariable}
      >
        <UserMenuItems />
      </UIKitUserMenu>
    );
  }

  if (isWrongNetwork) {
    return (
      <UIKitUserMenu text={t("Network")} variant="danger">
        <UserMenuItems />
      </UIKitUserMenu>
    );
  }
  return <WalletConnectButton />;
  // return (
  //   <ConnectWalletButton scale="sm">
  //     <Box display={["none", , , "block"]}>
  //       <Trans>Connect Wallet</Trans>
  //     </Box>
  //     <Box display={["block", , , "none"]}>
  //       <Trans>Connect</Trans>
  //     </Box>
  //   </ConnectWalletButton>
  // );
};

export default UserMenu;
