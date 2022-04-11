import { ethers } from 'ethers';

export function getLibrary(
	provider: ethers.providers.ExternalProvider
): ethers.providers.Web3Provider {
	return new ethers.providers.Web3Provider(provider);
}
