import React from 'react';
import styled from 'styled-components';
import { Flex } from 'ui-kit/components/Box';
import { Button } from 'ui-kit/components/Button';
import { connectorLocalStorageKey, walletLocalStorageKey } from './config';
import { Config, ConnectorNames, Login } from './types';

interface Props {
	walletConfig: Config;
	login: Login;
	onDismiss: () => void;
}

const WalletCardWrapper = styled(Flex)``;

function WalletCard({ login, walletConfig, onDismiss }: Props) {
	const { title, icon: Icon } = walletConfig;
	const onClickHandler = () => {
		const isIOS =
			/iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream;

		// Since iOS does not support Trust Wallet we fall back to WalletConnect
		if (walletConfig.title === 'Trust Wallet' && isIOS) {
			login(ConnectorNames.WalletConnect);
		} else {
			login(walletConfig.connectorId);
		}

		localStorage.setItem(walletLocalStorageKey, walletConfig.title);
		localStorage.setItem(connectorLocalStorageKey, walletConfig.connectorId);
		onDismiss();
	};
	return (
		<WalletCardWrapper>
			<Button
				onClick={onClickHandler}
				//startIcon={Icon}
				width={'100%'}
			>
				Login with {title}
			</Button>
		</WalletCardWrapper>
	);
}

export default WalletCard;
