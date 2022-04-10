import styled from 'styled-components';
import {
	background,
	border,
	flexbox,
	layout,
	position,
	space,
} from 'styled-system';
import Box from './Box';
import { PercentageBoxProps } from './types';

const PercentageBox = styled(Box)<PercentageBoxProps>`
	// Width
	--width-min-value: ${({ pWidth }) => pWidth[0]};
	--width-min-value-px: calc(var(--width-min-value) * 1px);
	--width-max-value: ${({ pWidth }) => pWidth[1]};
	--width-max-value-px: calc(var(--width-max-value) * 1px);
	--width-diff-value: calc(var(--width-max-value) - var(--width-min-value));
	--width-min-viewport: ${({ minScreenWidth }) => minScreenWidth};
	--width-min-viewport-px: calc(var(--width-min-viewport) * 1px);
	--width-max-viewport: ${({ maxScreenWidth }) => maxScreenWidth};
	--width-diff-viewport: calc(
		var(--width-max-viewport) - var(--width-min-viewport)
	);
	--percent-viewport: calc(
		calc(100vw - var(--width-min-viewport-px)) / var(--width-diff-viewport)
	);
	width: calc(
		var(--width-min-value-px) +
			calc(var(--width-diff-value) * var(--percent-viewport))
	);
	min-width: var(--width-min-value-px);
	max-width: var(--width-max-value-px);

	// Height
	--height-min-value: ${({ pHeight }) => pHeight[0]};
	--height-min-value-px: calc(var(--height-min-value) * 1px);
	--height-max-value: ${({ pHeight }) => pHeight[1]};
	--height-max-value-px: calc(var(--height-max-value) * 1px);
	--height-diff-value: calc(var(--height-max-value) - var(--height-min-value));
	height: calc(
		var(--height-min-value-px) +
			calc(var(--height-diff-value) * var(--percent-viewport))
	);
	min-height: var(--height-min-value-px);
	max-height: var(--height-max-value-px);

	${background}
	${border}
	${flexbox}
	${layout}
	${position}
	${space}
`;

export default PercentageBox;
