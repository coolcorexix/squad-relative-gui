import React, { cloneElement, ElementType, isValidElement } from 'react';
import clsx from 'clsx';
import { isFunction } from 'lodash';
import StyledButton from './StyledButton';
import {
	ButtonProps,
	ButtonModifiers,
	ButtonSizes,
	ButtonVariants,
} from './types';
import { SpinnerIcon } from 'ui-kit/components/Icon';
import { Typography } from 'ui-kit/components/Typography';

function getLoadingContentRenderer(props: ButtonProps): JSX.Element {
	const { children, variant } = props || {};
	if (variant === ButtonVariants.LINK && children) {
		return (
			<Typography className={clsx('btn__sync-styles')} variant={'h6'}>
				Loading...
			</Typography>
		);
	}
	return <SpinnerIcon height={14} width={14} />;
}

function getContentRenderer(props: ButtonProps): JSX.Element {
	const {
		children,
		endIcon,
		endIconSyncState,
		size,
		startIcon,
		startIconSyncState,
	} = props || {};

	const startIconProps: any = {
		className: clsx(startIconSyncState && 'btn__sync-styles'),
		width: size === ButtonSizes.SMALL ? '13px' : '16px',
	};
	let childrenMarginLeft = '0';
	if (startIcon) {
		childrenMarginLeft = '8px';
	}

	const endIconProps: any = {
		className: clsx(endIconSyncState && 'btn__sync-styles'),
		width: size === ButtonSizes.SMALL ? '13px' : '16px',
	};
	let childrenMarginRight = '0';
	if (endIcon) {
		childrenMarginRight = '8px';
	}

	return (
		<>
			{isValidElement(startIcon) && cloneElement(startIcon, startIconProps)}
			<Typography
				className={'btn__sync-styles'}
				variant={'h6'}
				ml={childrenMarginLeft}
				mr={childrenMarginRight}
			>
				{children}
			</Typography>
			{isValidElement(endIcon) && cloneElement(endIcon, endIconProps)}
		</>
	);
}

function Button<E extends ElementType = 'button'>(
	props: ButtonProps<E>
): JSX.Element {
	const {
		className: classNameProps,
		children,
		disabled,
		endIcon,
		loading,
		onClick,
		size,
		startIcon,
		...rest
	} = props || {};

	const onClickButton = () => {
		if (disabled) return;
		if (isFunction(onClick)) onClick();
	};

	let content;
	if (loading && !disabled) {
		content = getLoadingContentRenderer(props);
	} else {
		content = getContentRenderer(props);
	}

	const className = clsx(
		disabled && 'disabled',
		loading && 'loading',
		classNameProps
	);
	return (
		<StyledButton
			{...rest}
			className={className}
			disabled={disabled}
			onClick={onClickButton}
			btnSize={size}
		>
			{content}
		</StyledButton>
	);
}

Button.defaultProps = {
	borderRadius: 12,
	disabled: false,
	loading: false,
	modifier: ButtonModifiers.CONTAINED,
	size: ButtonSizes.MEDIUM,
	variant: ButtonVariants.PRIMARY,
};

export default Button;
