import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { useModal } from '.';
import { ModalContainer } from './styles';

export default {
	title: 'Widgets/Modal',
	argTypes: {},
} as ComponentMeta<any>;

const CustomModal = () => {
	return <ModalContainer minWidth="370px">This is a modal</ModalContainer>;
};

export const Default = () => {
	const [onPresent] = useModal(CustomModal());
	return (
		<>
			<button onClick={onPresent}>Click me!</button>
		</>
	);
};
