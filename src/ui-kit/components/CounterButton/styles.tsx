import styled from 'styled-components';
import { majorScalePx } from 'ui-kit/util';
import { layout, space } from 'styled-system';
import { CounterButtonProps } from './CounterButton';

export const CounterButtonContainer = styled.div<CounterButtonProps>`
	align-items: center;
	display: flex;
	justify-content: center;
	height: 48px;
	${layout}
	${space}
`;

export const CounterButtonDecrease = styled.div`
	align-items: center;
	background-color: ${({ theme }) => theme.colors.backgroundStandard};
	border-top-left-radius: ${majorScalePx(3)};
	border-bottom-left-radius: ${majorScalePx(3)};
	cursor: pointer;
	display: flex;
	height: 100%;
	padding-left: 14px;
	padding-right: 7px;
	> svg {
		fill: ${({ theme }) => theme.colors.textBody};
	}
`;

export const CounterButtonIncrease = styled.div`
	align-items: center;
	background-color: ${({ theme }) => theme.colors.backgroundStandard};
	border-top-right-radius: ${majorScalePx(3)};
	border-bottom-right-radius: ${majorScalePx(3)};
	cursor: pointer;
	display: flex;
	height: 100%;
	padding-left: 7px;
	padding-right: 14px;
	> svg {
		fill: ${({ theme }) => theme.colors.textBody};
	}
`;

export const CounterButtonInput = styled.input.attrs({ type: 'text' })`
	background-color: ${({ theme }) => theme.colors.backgroundStandard};
	border: none;
	border-radius: 0;
	box-sizing: border-box;
	color: ${({ theme }) => theme.colors.textTitle};
	height: ${majorScalePx(12)};
	text-align: center;
	width: ${majorScalePx(8)};

	&:focus {
		outline: none;
	}
`;
