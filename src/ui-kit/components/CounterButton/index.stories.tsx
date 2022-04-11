import React, { useState } from 'react';
import styled from 'styled-components';
import { ComponentMeta } from '@storybook/react';
import CounterButton from './CounterButton';

const Wrapper = styled.div`
	width: 200px;
`;

export const Default = (props: { max: number; min: number }) => {
	const [prev, setPrev] = useState(0);
	const [counter, setCounter] = useState(0);
	const onChangeCounter = (prev: number, value: number) => {
		setPrev(prev);
		setCounter(value);
	};
	return (
		<>
			<h1>Counter Button</h1>
			<h3>
				Min: {props.min} | Max: {props.max}
			</h3>
			<Wrapper>
				<CounterButton
					max={props.max}
					min={props.min}
					onChange={onChangeCounter}
				/>
			</Wrapper>
			<h2>Prev: {prev}</h2>
			<h2>Current: {counter}</h2>
		</>
	);
};

const index = {
	title: 'Components/CounterButton',
	argTypes: {
		max: {
			defaultValue: 10,
			control: { type: 'number' },
		},
		min: {
			defaultValue: 0,
			control: { type: 'number' },
		},
	},
} as ComponentMeta<any>;
export default index;
