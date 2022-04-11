import styled from 'styled-components';
import { space, layout, variant, borderRadius } from 'styled-system';
import BaseButton from './BaseButton';
import { BaseButtonProps } from './types';
import {
	getBackgroundColor,
	getBorder,
	getColor,
	getHoverBackgroundColor,
	getHoverColor,
	getPressedBackgroundColor,
	getPressedColor,
	iconSizeVariants,
	buttonSizeVariants,
} from './theme';

const StyledButton = styled(BaseButton)<BaseButtonProps>`
	--backgroundColor: ${getBackgroundColor};
	--color: ${getColor};
	background-color: var(--backgroundColor);
	border: ${getBorder};
	color: var(--color);

	& > .btn__sync-styles {
		background-color: var(--backgroundColor);
		color: var(--color);
		fill: var(--color);
	}

	&:hover:not(:disabled):not(.loading) {
		--hoverBackgroundColor: ${getHoverBackgroundColor};
		--hoverColor: ${getHoverColor};
		background-color: var(--hoverBackgroundColor);
		color: var(--hoverColor);
		& .btn__sync-styles {
			background-color: var(--hoverBackgroundColor);
			color: var(--hoverColor);
			fill: var(--hoverColor);
		}
	}

	&:active:not(:disabled):not(.loading) {
		--pressedBackgroundColor: ${getPressedBackgroundColor};
		--pressedColor: ${getPressedColor};
		background-color: var(--pressedBackgroundColor);
		color: var(--pressedColor);
		& .btn__sync-styles {
			background-color: var(--pressedBackgroundColor);
			color: var(--pressedColor);
			fill: var(--pressedColor);
		}
	}

	&.disabled,
	&.loading {
		cursor: default;
	}

	${variant({
		prop: 'btnSize',
		variants: buttonSizeVariants,
	})}

	&.btn--icon {
		${variant({
			prop: 'btnSize',
			variants: iconSizeVariants,
		})}
	}
	${borderRadius}
	${layout}
	${space}
`;

export default StyledButton;
