import React from 'react';
import styled from 'styled-components';
import { GridLayout } from '.';

export default {
	title: 'Components/Layout',
	argTypes: {},
};

const Stub = styled.div`
	width: 100%;
	background: #1fc7d4;
	height: 300px;
`;

export const Base: React.FC = () => {
	return (
		<GridLayout>
			{[...Array(24)].map((value) => (
				<Stub key={value} />
			))}
		</GridLayout>
	);
};
