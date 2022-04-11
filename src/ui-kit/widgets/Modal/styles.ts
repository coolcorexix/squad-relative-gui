import styled from 'styled-components';
import { Box } from 'ui-kit/components/Box';

export const ModalHeader = styled.div<{ background?: string }>`
	align-items: center;
	background: ${({ background }) => background || 'transparent'};
	border-bottom: 1px solid ${({ theme }) => theme.colors.cardBorder};
	display: flex;
	padding: 12px 24px;
`;

export const ModalContainer = styled(Box)<{ minWidth: string }>`
	background: ${({ theme }) => theme.modal.background};
	border-radius: 24px;
	max-height: 100vh;
	overflow: hidden;
	position: relative;
	width: 100%;
	z-index: ${({ theme }) => theme.zIndices.modal};

	${({ theme }) => theme.mediaQueries.xs} {
		width: auto;
		min-width: ${({ minWidth }) => minWidth};
		max-width: 100%;
	}
`;
