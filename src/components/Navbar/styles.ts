import { keyframes } from 'styled-components';

export const fadeOut = keyframes`
	from {
		transform: translateY(0)
	}

	to {
		transform: translateY(-100px)
	}
`;

export const fadeIn = keyframes`
	from {
		transform: translateY(-100px)
	}

	to {
		transform: translateY(0)
	}
`;
