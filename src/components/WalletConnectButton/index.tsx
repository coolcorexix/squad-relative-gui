import React from 'react';
import { Button } from 'ui-kit/components/Button';
import { useWalletModal } from 'ui-kit/widgets/WalletModal';
import { useAuth } from 'hooks/useAuth';

export function WalletConnectButton() {
	const { login } = useAuth();
	const { onPresentConnectModal } = useWalletModal(login);
	return (
		<Button
			onClick={() => {
				onPresentConnectModal();
			}}
		>
			Connect Wallet
		</Button>
	);
}
