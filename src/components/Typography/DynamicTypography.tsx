import styled from 'styled-components';
import { getColor } from './getColor';
import { Base } from './Base';
import {
	TypographyVariantsBigValue,
	TypographyVariantsSmallValue,
} from './variants';
import { IDynamicTypographyProps } from './types';

export const DynamicTypography = styled(Base)<IDynamicTypographyProps>`
	color: ${getColor};
	${({ variants }) => TypographyVariantsSmallValue[variants.xs as string]}

	${({ theme }) => theme.mediaQueries.sm} {
		${({ variants }) => TypographyVariantsBigValue[variants.sm as string]}
	}
`;
