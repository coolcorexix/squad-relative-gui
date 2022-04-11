import styled, { DefaultTheme } from 'styled-components';
import { variant } from 'styled-system';
import getThemeValue from 'ui-kit/util/getThemeValue';
import Base from './Base';
import { ITypographyProps } from './types';
import {
	TypographyVariantsBigValue,
	TypographyVariantsSmallValue,
} from './variants';

export const getColor = ({
	color,
	theme,
}: {
	color?: string;
	theme: DefaultTheme;
}) => {
	return getThemeValue(`colors.${color}`, color)(theme) || theme.colors.text;
};

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
