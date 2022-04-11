import { ElementType } from 'react';
import clsx from 'clsx';
import Button from './Button';
import { ButtonProps } from './types';

function IconButton<E extends ElementType = 'button'>(
	props: ButtonProps<E>
): JSX.Element {
	const startIcon = props.children;
	return (
		<Button
			{...props}
			className={clsx('btn--icon', props.className)}
			children={null}
			startIcon={startIcon}
		/>
	);
}
export default IconButton;
