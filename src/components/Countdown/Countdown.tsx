import React, {
	Dispatch,
	SetStateAction,
	useEffect,
	useRef,
	useState,
} from 'react';
import { CountdownContainer } from './styles';
import {
	CountdownDateObject,
	CountdownDateRenderer,
	CountdownProps,
} from './types';
import { calcTime, pad } from './helper';

const DEFAULT_STATE = {
	timeLeft: 0,
	completed: true,
	days: 0,
	hours: 0,
	minutes: 0,
	seconds: 0,
	milliseconds: 0,
};

function getRendererTimer(timer: CountdownDateObject): CountdownDateRenderer {
	return {
		days: pad(timer.days, 2),
		hours: pad(timer.hours, 2),
		minutes: pad(timer.minutes, 2),
		seconds: pad(timer.seconds, 2),
		milliseconds: pad(timer.milliseconds, 4),
	} as CountdownDateRenderer;
}

function Countdown(props: CountdownProps) {
	const { fontSize = 14, onComplete } = props;
	const [timer, setTimer]: [
		CountdownDateObject,
		Dispatch<SetStateAction<CountdownDateObject>>
	] = useState(DEFAULT_STATE);

	const intervalRef = useRef(-1);

	const clearInterval = (): void => {
		window.clearInterval(intervalRef.current);
		intervalRef.current = -1;
	};

	const counting = (): void => {
		const timer: CountdownDateObject = calcTime(props.endTime, props.startTime);
		if (timer.completed) {
			clearInterval();
			if (typeof onComplete === 'function') {
				onComplete();
			}
		}
		setTimer(timer);
	};

	const start = (): void => {
		clearInterval();
		counting();
		intervalRef.current = window.setInterval(() => {
			counting();
		}, 1000);
	};

	useEffect((): void => {
		start();
	}, [props.startTime, props.endTime, props.format]);

	useEffect(() => {
		return () => {
			clearInterval();
		};
	}, []);

	const displayedTime = getRendererTimer(timer);

	if (props.children) {
		if (React.isValidElement(props.children)) {
			return React.cloneElement(props.children as React.ReactElement, {
				...props,
				time: displayedTime,
			});
		} else if (typeof props.children === 'function') {
			return props.children({ ...props, time: displayedTime });
		}
		return props.children;
	}

	return (
		<CountdownContainer fontSize={fontSize}>
			{`${displayedTime.days}d:`}
			{`${displayedTime.hours}h:`}
			{`${displayedTime.minutes}m:`}
			{`${displayedTime.seconds}s`}
		</CountdownContainer>
	);
}

export default Countdown;
