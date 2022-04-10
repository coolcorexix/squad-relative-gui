import styled, { keyframes } from 'styled-components';
import { CSSTransition } from 'react-transition-group';
import { DrawerProps } from './types';

const transitionNames = {
	TOP: 'top',
	LEFT: 'left',
	BOTTOM: 'bottom',
	RIGHT: 'right',
};
const durationInMs = 150;

export const fadeOut = keyframes`
	from {
		transform: translateY(0)
	}

	to {
		transform: translateY(-100vh)
	}
`;

export const fadeIn = keyframes`
	from {
		transform: translateY(-100vh)
	}

	to {
		transform: translateY(0)
	}
`;

const DrawerContainer = styled.div<{ duration: number; width?: number }>`
	height: 100vh;
	left: 0;
	position: fixed;
	top: 0;
	width: ${({ width }) => (width ? `${width}px` : `100vw`)};
	z-index: ${({ theme }) => theme.zIndices.navbar};

	&.${transitionNames.TOP}-enter {
		opacity: 0;
	}

	&.${transitionNames.TOP}-enter-active {
		opacity: 1;
		animation: ${fadeIn} ${({ duration }) => duration}ms ease-out;
	}

	&.${transitionNames.TOP}-exit-active {
		// There are a frame that inconsistent w/ CSS timeout
		// Therefore I plus 1ms to make the comp disappear before animation's ended
		animation: ${fadeOut} ${({ duration }) => duration + 1}ms ease-out;
	}
	&.${transitionNames.TOP}-exit-done {
		opacity: 0;
	}
`;

function Drawer(props: DrawerProps): JSX.Element {
	const { anchor, children, duration, open, onOpen, onClose, width } = props;
	return (
		<CSSTransition
			in={props.open}
			timeout={+duration ?? durationInMs}
			classNames={anchor}
			unmountOnExit
			onEnter={onOpen}
			onExited={onClose}
		>
			<DrawerContainer duration={+duration ?? durationInMs} width={width}>
				{children}
			</DrawerContainer>
		</CSSTransition>
	);
}

Drawer.defaultProps = {
	anchor: 'left',
	duration: 300,
};

export default Drawer;
