import styled from 'styled-components';
import { layout, LayoutProps, space, SpaceProps } from 'styled-system';
import { LayoutCenter, majorScalePx, NonSelected } from 'ui-kit/util';

/**
 * Egg Tag
 */
export const EggTagContainer = styled.div`
	${LayoutCenter};
	justify-content: flex-end;
	${layout}
	${space}
`;

/**
 * Egg Card Base
 */
export const EggCardBaseContainer = styled.div`
	display: inline-block;
	max-width: ${majorScalePx(62)};
	${NonSelected}
	${layout}
	${space}
`;

export const EggCardBaseComp = styled.div`
	background-color: ${({ theme }) => theme.colors.backgroundStandard};
	border-radius: ${majorScalePx(6)};
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: 100%;
	padding: ${majorScalePx(4)};
	width: 100%;

	&:hover {
		cursor: pointer;
	}

	&.active {
		border: ${({ theme }) => `1px solid ${theme.colors.primaryBlueStandard}`};
	}
`;

export const EggCardShapeContainer = styled.div`
	${LayoutCenter};
	${layout}
	${space}
`;

export const EggCardInfoContainer = styled.div`
	${layout}
	${space}
`;

/**
 * Egg Card with ID
 */
export const EggCardIDLabel = styled.div`
	${LayoutCenter};
	${layout}
	${space}
`;

export const EggCardNameLabel = styled.div`
	${LayoutCenter};
	${layout}
	${space}
`;

export const EggCardPriceLabel = styled.div`
	height: ${majorScalePx(6)};
	${LayoutCenter};
	${layout}
	${space}
`;

export const EggCardPriceIconContainer = styled.div<LayoutProps & SpaceProps>`
	max-height: ${majorScalePx(4)};
	max-width: ${majorScalePx(4)};
	${LayoutCenter};
	${layout}
	${space}
`;
