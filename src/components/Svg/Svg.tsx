import styled, { css, keyframes } from 'styled-components';
import { space } from 'styled-system';
import { getThemeValue } from 'components/utils';
import { SvgProps } from './types';

const rotate = keyframes`
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
`;

const spinStyle = css`
	animation: ${rotate} 2s linear infinite;
`;

const SvgComp = styled.svg<SvgProps>`
	align-self: center; // Safari fix
	fill: ${({ theme, color }) => getThemeValue(`colors.${color}`, color)(theme)};
	flex-shrink: 0;
	${({ spin }) => spin && spinStyle}
	${space}
`;

function Svg(props: SvgProps) {
	return <SvgComp {...props} />;
}

Svg.defaultProps = {
	color: 'text',
	spin: false,
	width: '20px',
	xmlns: 'http://www.w3.org/2000/svg',
};

export default Svg;
