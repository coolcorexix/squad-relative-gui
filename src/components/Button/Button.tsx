import React, { ReactNode, ElementType } from 'react';
import clsx from 'clsx';
import { upperCase, isFunction } from 'lodash';
import { Typography } from '../Typography';
import { StyledButton, Wrapper } from './StyledButton';
import { getColor } from './theme';
import { ButtonProps, ButtonVariants } from './types';

function getContentRenderer(props: ButtonProps): ReactNode {
	const { uppercase, children } = props;
	if (uppercase) {
		return upperCase(children as string);
	}
	return children;
}

function Button<E extends ElementType = 'button'>(
	props: ButtonProps<E>
): JSX.Element {
	const {
		className: classNameProps,
		children,
		disabled,
		onClick,
		variant,
		...rest
	} = props || {};

	const onClickButton = () => {
		if (disabled) return;
		if (isFunction(onClick)) onClick();
	};

	const className = clsx(disabled && 'disabled', classNameProps);
	return (
		<Wrapper>
			<StyledButton
				{...rest}
				className={className}
				disabled={disabled}
				onClick={onClickButton}
				variant={variant}
			>
				<Typography variant={'h6'} color={getColor(props)}>
					{getContentRenderer(props)}
				</Typography>
			</StyledButton>
		</Wrapper>
	);
}

Button.defaultProps = {
	disabled: false,
	variant: ButtonVariants.PRIMARY,
	paddingLeft: '56px',
	paddingRight: '56px',
	uppercase: true,
};

export default Button;
