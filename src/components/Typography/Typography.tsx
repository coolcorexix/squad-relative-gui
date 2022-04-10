import styled from 'styled-components';
import { variant } from 'styled-system';
import { getColor } from './getColor';
import { Base } from './Base';
import { ITypographyProps } from './types';
import {
	TypographyVariantsBigValue,
	TypographyVariantsSmallValue,
} from './variants';

export const Typography = styled(Base)<ITypographyProps>`
	color: ${getColor};
	${variant({
		variants: TypographyVariantsSmallValue,
	})}

	${({ theme }) => theme.mediaQueries.sm} {
		${variant({
			variants: TypographyVariantsBigValue,
		})}
	}
`;
