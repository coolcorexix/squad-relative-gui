import { DefaultTheme } from 'styled-components';
import { BaseButtonProps, MixedType, ButtonVariants } from './types';
import { getThemeValue } from 'components/utils';

function toColor(theme: DefaultTheme, color: string): string {
	return getThemeValue(`colors.${color}`, color)(theme);
}

export function getBackgroundColor(
	props: MixedType<BaseButtonProps, { theme: DefaultTheme }>
): string {
	const { disabled, theme, variant } = props;
	const backgroundColors: { [key: string]: any } = {
		[ButtonVariants.PRIMARY]: {
			disabled: toColor(theme, 'primaryGreen'),
			normal: toColor(theme, 'primaryGreen'),
		},
		[ButtonVariants.SECONDARY]: {
			disabled: toColor(theme, 'primaryPurple'),
			normal: toColor(theme, 'primaryPurple'),
		},
	};
	return backgroundColors[variant as string][disabled ? 'disabled' : 'normal'];
}

export function getBoxShadowColor(
	props: MixedType<BaseButtonProps, { theme: DefaultTheme }>
): string {
	const { disabled, theme, variant } = props;
	const backgroundColors: { [key: string]: any } = {
		[ButtonVariants.PRIMARY]: {
			disabled: toColor(theme, 'primaryGreenDarker'),
			normal: toColor(theme, 'primaryGreenDarker'),
		},
		[ButtonVariants.SECONDARY]: {
			disabled: toColor(theme, 'primaryPurpleDarker'),
			normal: toColor(theme, 'primaryPurpleDarker'),
		},
	};
	return backgroundColors[variant as string][disabled ? 'disabled' : 'normal'];
}

export function getColor(
	props: MixedType<BaseButtonProps, { theme: DefaultTheme }>
): string {
	const { theme, variant } = props;
	const backgroundColors: { [key: string]: any } = {
		[ButtonVariants.PRIMARY]: toColor(theme, 'black'),
		[ButtonVariants.SECONDARY]: toColor(theme, 'white'),
	};
	return backgroundColors[variant as string];
}
