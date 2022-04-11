import { useCallback } from 'react';
import { UnsupportedChainIdError, useWeb3React } from '@web3-react/core';
import { connectorLocalStorageKey, ConnectorNames } from '@pancakeswap/uikit';
import { NoBscProviderError } from '@binance-chain/bsc-connector';
import {
	UserRejectedRequestError as UserRejectedRequestErrorWalletConnect,
	WalletConnectConnector,
} from '@web3-react/walletconnect-connector';
import { connectorsByName } from 'utils/connectorsByNames';
import { setupNetwork } from 'utils/setupNetwork';
import {
	NoEthereumProviderError,
	UserRejectedRequestError,
} from '@web3-react/injected-connector';

export function useAuth() {
	const { activate, deactivate } = useWeb3React();
	const login = useCallback(
		(connectorID: ConnectorNames) => {
			const connector = connectorsByName[connectorID];
			if (connector) {
				activate(connector, async (error: Error) => {
					//* this is set during the activate function
					window.localStorage.removeItem(connectorLocalStorageKey);
					switch (error.constructor) {
						case UnsupportedChainIdError:
							const hasSetup = await setupNetwork();
							if (hasSetup) {
								activate(connector);
							}
							return;
						case NoBscProviderError:
						case NoEthereumProviderError:
							console.error('No provider was found');
							return;
						case UserRejectedRequestError:
						case UserRejectedRequestErrorWalletConnect:
							if (connector instanceof WalletConnectConnector) {
								const walletConnector = connector as WalletConnectConnector;
								walletConnector.walletConnectProvider = null;
							}
							console.error('Please authorize to access to your accounts');
							return;
						default:
							console.error(error.message);
					}
				});
			} else {
				console.error('The connector config is wrong');
			}
		},
		[activate]
	);
	const logout = useCallback(() => {
		deactivate();
		//* This localStorage key is set by @web3-react/walletconnect-connector
		if (window.localStorage.getItem('walletconnect')) {
			connectorsByName.walletconnect.close();
			connectorsByName.walletconnect.walletConnectProvider = null;
		}
	}, [deactivate]);
	return { login, logout };
}
