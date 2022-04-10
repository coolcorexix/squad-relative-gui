import styled from 'styled-components';
import { ComposedProps } from '../utils/composing';
import { composedStyles, majorScalePx } from '../utils';
import { LayoutCenter } from '../utils/commonStyled';

export const CountdownContainer = styled.div<{ fontSize: number }>`
	font-size: ${({ fontSize }) => `${fontSize}px`};
`;

export const PreorderCountdownContainer = styled.div<ComposedProps>`
	background: ${({ theme }) => theme.colors.gray500};
	border-radius: 12px;
	box-shadow: 0 8px rgba(255, 255, 255, 0.05);
	margin-bottom: 8px;
	min-width: 288px;
	padding-top: ${majorScalePx(6)};
	padding-bottom: ${majorScalePx(6)};
	padding-left: ${majorScalePx(4)};
	padding-right: ${majorScalePx(4)};
	width: 100%;
	${({ theme }) => theme.mediaQueries.sm} {
		min-width: 455px;
	}
	${composedStyles}
`;

export const PreorderCountdownTitleContainer = styled.div`
	padding-bottom: ${majorScalePx(3)};
	${LayoutCenter}
`;

export const PreorderCountdownTimerContainer = styled.div``;

export const PreorderCountdownTimerNumber = styled.div`
	${LayoutCenter};
`;

export const PreorderCountdownTimerTitle = styled.div`
	${LayoutCenter}
`;
