import { ChangeEvent, useState } from 'react';
import { PaginationItemComp } from './styles';
import { PaginationItemProps } from './types';
import { ElementType } from 'react';

function PaginationItem<E extends ElementType = 'input'>(
	props: PaginationItemProps<E>
): JSX.Element {
	const { max, page, onChangeValue: onChangeValueProps } = props;

	const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		if (value > max) {
			e.target.value = max;
			return notifyChanged(max);
		}
		notifyChanged(+value);
	};

	const notifyChanged = (value: number): void => {
		if (onChangeValueProps) {
			onChangeValueProps(value);
		}
	};

	return (
		<PaginationItemComp
			pattern={'d*'}
			maxLength={max.toString().length}
			onChange={onChangeValue}
			value={page}
		/>
	);
}

PaginationItem.defaultProps = {
	max: 1,
	page: 1,
};

export default PaginationItem;
