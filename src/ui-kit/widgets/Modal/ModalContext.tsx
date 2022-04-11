import React, { createContext, useState } from 'react';
import styled from 'styled-components';
import Overlay from 'ui-kit/components/Overlay/Overlay';
import { Handler } from './types';

interface ModalsContext {
	isOpen: boolean;
	nodeId: string;
	modalNode: React.ReactNode;
	setModalNode: React.Dispatch<React.SetStateAction<React.ReactNode>>;
	onPresent: (node: React.ReactNode, newNodeId: string) => void;
	onDismiss: Handler;
	setCloseOnOverlayClick: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Context = createContext<ModalsContext>({
	isOpen: false,
	nodeId: '',
	modalNode: null,
	setModalNode: () => null,
	onPresent: () => null,
	onDismiss: () => null,
	setCloseOnOverlayClick: () => true,
});

const ModalWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	z-index: ${({ theme }) => {
		if (theme?.zIndices?.modal != null) {
			return theme.zIndices.modal - 1;
		}
		return 9999;
	}};
`;

const ModalProvider = ({ children }: { children: React.ReactNode }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [modalNode, setModalNode] = useState<React.ReactNode>();
	const [nodeId, setNodeId] = useState('');
	const [closeOnOverlayClick, setCloseOnOverlayClick] = useState(true);

	const handlePresent = (node: React.ReactNode, newNodeId: string) => {
		setModalNode(node);
		setIsOpen(true);
		setNodeId(newNodeId);
	};

	const handleDismiss = () => {
		setModalNode(undefined);
		setIsOpen(false);
		setNodeId('');
	};

	const handleOverlayDismiss = () => {
		if (closeOnOverlayClick) {
			handleDismiss();
		}
	};

	return (
		<Context.Provider
			value={{
				isOpen,
				nodeId,
				modalNode,
				setModalNode,
				onPresent: handlePresent,
				onDismiss: handleDismiss,
				setCloseOnOverlayClick,
			}}
		>
			{isOpen && (
				<ModalWrapper>
					<Overlay show onClick={handleOverlayDismiss} />
					{React.isValidElement(modalNode) &&
						React.cloneElement(modalNode, {
							onDismiss: handleDismiss,
						})}
				</ModalWrapper>
			)}
			{children}
		</Context.Provider>
	);
};

export default ModalProvider;
