import { ChainId } from '@pancakeswap/sdk';
import { BASE_BSC_SCAN_URLS } from 'config/BASE_BSC_SCAN_URLS';
import { rpcNodes } from './rpcNodes';

export async function setupNetwork() {
	//* usually this provider come from metamask
	const ethereumProvider = window.ethereum;
	if (!ethereumProvider || !ethereumProvider.request) {
		return;
	}
	const chainId = parseInt(process.env.NEXT_PUBLIC_CHAIN_ID as string, 10);
	try {
		await ethereumProvider.request({
			method: 'wallet_addEthereumChain',
			params: [
				{
					chainId: `0x${chainId.toString(16)}`,
					chainName: 'Binance Smart Chain Mainnet',
					nativeCurrency: {
						name: 'BNB',
						symbol: 'bnb',
						decimals: 18,
					},
					rpcUrls: rpcNodes,
					blockExplorerUrls: [`${BASE_BSC_SCAN_URLS[ChainId.MAINNET]}/`],
				},
			],
		});
		return true;
	} catch (error) {
		console.error('Failed to setup network in metamask: ', error);
		return false;
	}
}
