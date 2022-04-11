import { ConnectorNames } from '@pancakeswap/uikit';
import { InjectedConnector } from '@web3-react/injected-connector';
import { WalletConnectConnector } from '@web3-react/walletconnect-connector';
import { BscConnector } from '@binance-chain/bsc-connector';
import { getRpcNodeUrl } from './getRpcNodeUrl';

const POLLING_INTERVAL = 12000;
const rpcUrl = getRpcNodeUrl();
//* toggle on "strictNullChecks": false in tsconfig.json
const chainId = parseInt(process.env.REACT_APP_CHAIN_ID as string, 10);

const injected = new InjectedConnector({ supportedChainIds: [chainId] });

const walletconnect = new WalletConnectConnector({
	rpc: {
		[chainId]: rpcUrl,
	},
	bridge: 'https://pancakeswap.bridge.walletconnect.org/',
	qrcode: true,
	pollingInterval: POLLING_INTERVAL,
});

const bscConnector = new BscConnector({ supportedChainIds: [chainId] });

export const connectorsByName: {
	[connectorName in ConnectorNames]: any;
} = {
	[ConnectorNames.Injected]: injected,
	[ConnectorNames.WalletConnect]: walletconnect,
	[ConnectorNames.BSC]: bscConnector,
};
