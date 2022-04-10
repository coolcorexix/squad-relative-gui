import { ComponentProps, ElementType } from 'react';
import { BorderRadiusProps, LayoutProps, SpaceProps } from 'styled-system';

export const ButtonVariants = {
	PRIMARY: 'primary',
	SECONDARY: 'secondary',
} as const;
export type ButtonVariant = typeof ButtonVariants[keyof typeof ButtonVariants];

export interface BaseButtonProps
	extends BorderRadiusProps,
		LayoutProps,
		SpaceProps {
	disabled?: boolean;
	uppercase?: boolean;
	variant: ButtonVariant;
}

export type MixedType<T, K> = T & K;

export type ButtonProps<P extends ElementType = 'button'> = MixedType<
	ComponentProps<P>,
	BaseButtonProps
>;
