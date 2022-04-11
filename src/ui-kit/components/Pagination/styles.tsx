import styled from 'styled-components';
import { layout, space } from 'styled-system';
import { LayoutCenter, majorScalePx } from 'ui-kit/util';

export const PaginationContainer = styled.div`
	${LayoutCenter};
	justify-content: space-between;
	max-width: ${majorScalePx(100)};
	${layout}
	${space}
`;

export const PaginationContent = styled.div`
	${LayoutCenter};
	margin: 0 ${majorScalePx(6)};
	width: 100%;
	${({ theme }) => theme.mediaQueries.sm} {
		margin: 0 ${majorScalePx(12)};
	}
`;

export const PaginationItemComp = styled.input.attrs({ type: 'text' })`
	background-color: ${({ theme }) => theme.colors.backgroundStandard};
	border: ${({ theme }) => `1px solid ${theme.colors.backgroundStroke}`};
	border-radius: ${majorScalePx(3)};
	box-sizing: border-box;
	color: ${({ theme }) => theme.colors.textTitle};
	height: ${majorScalePx(12)};
	padding: ${majorScalePx(3)};
	width: ${majorScalePx(14)};

	// Remove arrows
	&::-webkit-outer-spin-button,
	&::-webkit-inner-spin-button {
		-moz-appearance: textfield; //FF
		-webkit-appearance: none;
	}

	&:focus {
		outline: none;
	}
`;
