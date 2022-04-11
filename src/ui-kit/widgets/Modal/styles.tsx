import styled from 'styled-components';

export const ModalContainer = styled.div<{ minWidth: string | number }>`
	overflow: hidden;
	background: ${({ theme }) => {
		//theme.modal.background;
		console.log(`KDebugger -> styles -> theme`, theme);
		return '#f00';
	}};
	box-shadow: 0 20px 36px -8px rgba(14, 14, 44, 0.1),
		0 1px 1px rgba(0, 0, 0, 0.05);
	border: 1px solid
		${({ theme }) => {
			return '#f00'; // theme.colors.cardBorder
		}};
	border-radius: 32px;
	width: 100%;
	max-height: 100vh;
	z-index: ${({ theme }) => theme.zIndices.modal};

	${({ theme }) => `@media screen and (min-width: ${370}px)`} {
		width: auto;
		min-width: ${({ minWidth }) => {
			if (minWidth != null) {
				return minWidth;
			}
			return 350;
		}};
		max-width: 100%;
	}
`;
