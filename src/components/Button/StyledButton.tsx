import styled from 'styled-components';
import { border, space, layout } from 'styled-system';
import BaseButton from './BaseButton';
import { BaseButtonProps } from './types';
import { getBackgroundColor, getBoxShadowColor } from './theme';
import { majorScalePx } from '../utils';

export const Wrapper = styled.div`
	display: inline-block;
	height: 48px;
	padding-bottom: 3px;
`;

export const StyledButton = styled(BaseButton)<BaseButtonProps>`
	--backgroundColor: ${getBackgroundColor};
	background-color: var(--backgroundColor);
	border-radius: 4px;
	box-shadow: 0 3px ${getBoxShadowColor};
	height: 45px;
	margin-bottom: 3px;
	padding-top: ${majorScalePx(3)};
	padding-bottom: 9px;

	&.disabled,
	&.loading {
		cursor: default;
	}

	${border}
	${layout}
	${space}
`;
