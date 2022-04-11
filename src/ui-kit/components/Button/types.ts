import { ComponentProps, ElementType, ReactNode } from 'react';
import { BorderRadiusProps, LayoutProps, SpaceProps } from 'styled-system';

export const ButtonVariants = {
	PRIMARY: 'primary',
	SECONDARY: 'secondary',
	TEXT: 'text',
	LINK: 'link',
} as const;
export type ButtonVariant = typeof ButtonVariants[keyof typeof ButtonVariants];

export const ButtonSizes = {
	SMALL: 'sm',
	MEDIUM: 'md',
	LARGE: 'lg',
};
export type ButtonSize = typeof ButtonSizes[keyof typeof ButtonSizes];

export const ButtonModifiers = {
	CONTAINED: 'contained',
	OUTLINED: 'outlined',
};
export type ButtonModifier =
	typeof ButtonModifiers[keyof typeof ButtonModifiers];

export interface BaseButtonProps
	extends BorderRadiusProps,
		Omit<LayoutProps, 'size'>,
		SpaceProps {
	disabled?: boolean;
	endIcon?: ReactNode;
	endIconSyncState?: boolean;
	loading?: boolean;
	modifier?: ButtonModifier;
	startIcon?: ReactNode;
	startIconSyncState?: boolean; // hover color, onMouseOver,... with Button
	size?: ButtonSize;
	title?: string;
	variant?: ButtonVariant;
}

export type MixedType<T, K> = T & K;

export type ButtonProps<P extends ElementType = 'button'> = MixedType<
	ComponentProps<P>,
	BaseButtonProps
>;
