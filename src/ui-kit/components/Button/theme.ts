import { DefaultTheme } from 'styled-components';
import {
	BaseButtonProps,
	MixedType,
	ButtonSizes,
	ButtonVariants,
} from './types';
import getThemeValue from 'ui-kit/util/getThemeValue';

const FontButtonVariants = {
	SMALL: {
		fontSize: '14px',
		fontWeight: 500,
		lineHeight: '24px',
	},
	MEDIUM: {
		fontSize: '14px',
		fontWeight: 500,
		lineHeight: '24px',
	},
	LARGE: {
		fontSize: '14px',
		fontWeight: 500,
		lineHeight: '24px',
	},
};

export const buttonSizeVariants = {
	[ButtonSizes.SMALL]: {
		height: '32px',
		padding: '0 16px',
		...FontButtonVariants.SMALL,
	},
	[ButtonSizes.MEDIUM]: {
		height: '48px',
		padding: '12px 24px',
		...FontButtonVariants.MEDIUM,
	},
	[ButtonSizes.LARGE]: {
		height: '48px',
		...FontButtonVariants.LARGE,
	},
};

export const iconSizeVariants = {
	[ButtonSizes.SMALL]: {
		height: '32px',
		minWidth: '48px',
		padding: 0,
		width: '48px',
	},
	[ButtonSizes.MEDIUM]: {
		height: '48px',
		minWidth: '48px',
		padding: 0,
		width: '48px',
	},
	[ButtonSizes.LARGE]: {
		height: '48px',
		minWidth: '48px',
		padding: 0,
		width: '48px',
	},
};

function toColor(theme: DefaultTheme, color: string): string {
	return getThemeValue(`colors.${color}`, color)(theme);
}

export function getBorder(
	props: MixedType<BaseButtonProps, { theme: DefaultTheme }>
): string {
	const { loading, variant } = props;
	if (loading || variant !== ButtonVariants.SECONDARY) return 'none';
	return '1px solid #44444A';
}

export function getBackgroundColor(
	props: MixedType<BaseButtonProps, { theme: DefaultTheme }>
): string {
	const { disabled, theme, variant } = props;
	const backgroundColors: { [key: string]: any } = {
		[ButtonVariants.PRIMARY]: {
			disabled: toColor(theme, 'primaryBlueSecondDarker'),
			normal: toColor(theme, 'primaryBlueStandard'),
		},
		[ButtonVariants.SECONDARY]: {
			disabled: toColor(theme, 'backgroundLighter'),
			normal: toColor(theme, 'backgroundStandard'),
		},
		[ButtonVariants.TEXT]: { disabled: 'transparent', normal: 'transparent' },
		[ButtonVariants.LINK]: { disabled: 'transparent', normal: 'transparent' },
	};
	return backgroundColors[variant as string][disabled ? 'disabled' : 'normal'];
}

export function getHoverBackgroundColor(
	props: MixedType<BaseButtonProps, { theme: DefaultTheme }>
): string {
	const { theme, variant } = props;
	const backgroundColors: { [key: string]: any } = {
		[ButtonVariants.PRIMARY]: toColor(theme, 'primaryBlueLighter'),
		[ButtonVariants.SECONDARY]: toColor(theme, 'backgroundLighter'),
		[ButtonVariants.TEXT]: toColor(theme, 'backgroundLighter'),
		[ButtonVariants.LINK]: 'transparent',
	};
	return backgroundColors[variant as string];
}

export function getPressedBackgroundColor(
	props: MixedType<BaseButtonProps, { theme: DefaultTheme }>
): string {
	const { theme, variant } = props;
	const backgroundColors: { [key: string]: any } = {
		[ButtonVariants.PRIMARY]: toColor(theme, 'primaryBlueDarker'),
		[ButtonVariants.SECONDARY]: toColor(theme, 'backgroundDarker'),
		[ButtonVariants.TEXT]: 'transparent',
		[ButtonVariants.LINK]: 'transparent',
	};
	return backgroundColors[variant as string];
}

export function getColor(
	props: MixedType<BaseButtonProps, { theme: DefaultTheme }>
): string {
	const { theme, variant } = props;
	const backgroundColors: { [key: string]: any } = {
		[ButtonVariants.PRIMARY]: toColor(theme, 'text'),
		[ButtonVariants.SECONDARY]: toColor(theme, 'text'),
		[ButtonVariants.TEXT]: toColor(theme, 'text'),
		[ButtonVariants.LINK]: toColor(theme, 'primaryBlueStandard'),
	};
	return backgroundColors[variant as string];
}

export function getHoverColor(
	props: MixedType<BaseButtonProps, { theme: DefaultTheme }>
): string {
	const { theme, variant } = props;
	const backgroundColors: { [key: string]: any } = {
		[ButtonVariants.PRIMARY]: toColor(theme, 'text'),
		[ButtonVariants.SECONDARY]: toColor(theme, 'text'),
		[ButtonVariants.TEXT]: toColor(theme, 'text'),
		[ButtonVariants.LINK]: toColor(theme, 'primaryBlueLighter'),
	};
	return backgroundColors[variant as string];
}

export function getPressedColor(
	props: MixedType<BaseButtonProps, { theme: DefaultTheme }>
): string {
	const { theme, variant } = props;
	const backgroundColors: { [key: string]: any } = {
		[ButtonVariants.PRIMARY]: toColor(theme, 'textTitle'),
		[ButtonVariants.SECONDARY]: toColor(theme, 'textTitle'),
		[ButtonVariants.TEXT]: toColor(theme, 'textTitle'),
		[ButtonVariants.LINK]: toColor(theme, 'primaryBlueDarker'),
	};
	return backgroundColors[variant as string];
}
