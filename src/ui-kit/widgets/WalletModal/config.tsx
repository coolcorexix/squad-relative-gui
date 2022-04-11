import { Coin98Icon, TrustWalletIcon, SafePalIcon } from '@pancakeswap/uikit';
import {
	BinanceChainIcon,
	MetamaskIcon,
	WalletConnectIcon,
} from 'ui-kit/components/Icon';

import { Config, ConnectorNames } from './types';

const connectors: Config[] = [
	{
		title: 'Metamask',
		icon: <MetamaskIcon />,
		connectorId: ConnectorNames.Injected,
		priority: 1,
	},
	{
		title: 'WalletConnect',
		icon: <WalletConnectIcon />,
		connectorId: ConnectorNames.WalletConnect,
		priority: 2,
	},
	{
		title: 'Binance Chain',
		icon: <BinanceChainIcon />,
		connectorId: ConnectorNames.BSC,
		priority: 3,
	},
	// {
	// 	title: 'Trust Wallet',
	// 	icon: TrustWalletIcon,
	// 	connectorId: ConnectorNames.Injected,
	// 	priority: 999,
	// },
	// {
	// 	title: 'SafePal',
	// 	icon: SafePalIcon,
	// 	connectorId: ConnectorNames.Injected,
	// 	priority: 999,
	// },
	// {
	// 	title: 'Coin98',
	// 	icon: Coin98Icon,
	// 	connectorId: ConnectorNames.Injected,
	// 	priority: 999,
	// },
];

export default connectors;
export const connectorLocalStorageKey = 'connectorIdv2';
export const walletLocalStorageKey = 'wallet';
