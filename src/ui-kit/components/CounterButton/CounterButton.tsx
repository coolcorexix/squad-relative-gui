import React, { useCallback, useState } from 'react';
import { LayoutProps, SpaceProps } from 'styled-system';
import { MinusIcon, PlusIcon } from 'ui-kit/components/Icon';
import {
	CounterButtonContainer,
	CounterButtonDecrease,
	CounterButtonIncrease,
	CounterButtonInput,
} from './styles';

export interface CounterButtonProps extends LayoutProps, SpaceProps {
	max?: number;
	min?: number;
	onChange?(prev: number, counter: number): void;
	onExceed?(): void;
	start?: number;
}

const DefaultProps = {
	max: Infinity,
	min: -Infinity,
	start: 1,
};

function CounterButton(props: CounterButtonProps = DefaultProps) {
	const {
		max: maxValue = Infinity,
		min: minValue = -Infinity,
		onChange: onChangeProps,
		onExceed: onExceedProps,
	} = props;

	const [counter, setCounter] = useState(() => {
		if (!props || !props.start || isNaN(+props.start)) {
			return 1;
		}

		return +props.start;
	});

	const onDecrease = (): void => {
		const prevCounter: number = counter;
		if (prevCounter <= minValue) {
			onExceed();
			return;
		}
		setCounter(counter - 1);
		onChange(prevCounter, prevCounter - 1);
	};

	const onIncrease = (): void => {
		const prevCounter: number = counter;
		if (prevCounter >= maxValue) {
			onExceed();
			return;
		}
		setCounter(counter + 1);
		onChange(prevCounter, prevCounter + 1);
	};

	const onForceChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
		const value: number = +e.target.value;
		if (isNaN(value)) return;
		if (value < minValue || value > maxValue) {
			onExceed();
			return;
		}
		setCounter(value);
		onChange(counter, value);
	};

	const onChange = useCallback(
		(prev: number, current: number): void => {
			if (onChangeProps) {
				onChangeProps(prev, current);
			}
		},
		[onChangeProps]
	);

	const onExceed = useCallback(() => {
		if (onExceedProps) {
			onExceedProps();
		}
	}, [onExceedProps]);

	return (
		<CounterButtonContainer {...props} onChange={undefined}>
			<CounterButtonDecrease onClick={onDecrease}>
				<MinusIcon width={11} />
			</CounterButtonDecrease>
			<CounterButtonInput
				defaultValue={counter}
				max={maxValue}
				min={minValue}
				onChange={onForceChange}
				value={counter}
			/>
			<CounterButtonIncrease onClick={onIncrease}>
				<PlusIcon width={11} />
			</CounterButtonIncrease>
		</CounterButtonContainer>
	);
}

export default CounterButton;
