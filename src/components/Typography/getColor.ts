import { DefaultTheme } from 'styled-components';
import getThemeValue from 'components/utils/getThemeValue';

export const getColor = ({
	color,
	theme,
}: {
	color?: string;
	theme: DefaultTheme;
}) => {
	return getThemeValue(`colors.${color}`, color)(theme) || theme.colors.text;
};
