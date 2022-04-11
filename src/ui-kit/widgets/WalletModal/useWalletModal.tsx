import { useModal } from 'ui-kit/widgets/Modal';
import { ConnectModal } from './ConnectModal';
import { Login } from './types';

interface ReturnType {
	onPresentConnectModal: () => void;
}

export default function useWalletModal(login: Login): ReturnType {
	const [onPresentConnectModal] = useModal(<ConnectModal login={login} />);
	return { onPresentConnectModal };
}
