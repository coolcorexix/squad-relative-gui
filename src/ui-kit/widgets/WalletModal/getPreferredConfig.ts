import { walletLocalStorageKey } from './config';
import { Config } from './types';

/**
 * Checks local storage if we have saved the last wallet the user connected with
 * If we find something we put it at the top of the list
 *
 * @returns sorted config
 */
export const getPreferredConfig = (walletConfig: Config[]) => {
	const preferredWalletName = localStorage.getItem(walletLocalStorageKey);
	const sortedConfig = walletConfig.sort(
		(a: Config, b: Config) => a.priority - b.priority
	);

	if (!preferredWalletName) {
		return sortedConfig;
	}

	const preferredWallet = sortedConfig.find(
		(sortedWalletConfig) => sortedWalletConfig.title === preferredWalletName
	);

	if (!preferredWallet) {
		return sortedConfig;
	}

	return [
		preferredWallet,
		...sortedConfig.filter(
			(sortedWalletConfig) => sortedWalletConfig.title !== preferredWalletName
		),
	];
};
