import { CountdownDateInput, CountdownDateObject } from './types';

function getTimestampInMillisecond(timer: CountdownDateInput): number {
	let timestamp;
	if (typeof timer === 'string') {
		timestamp = new Date(timer).getTime() || 0;
	} else if (timer instanceof Date) {
		timestamp = timer.getTime() || 0;
	} else {
		timestamp = timer >= 0 ? timer : 0;
	}
	return timestamp;
}

export function calcTime(
	endDate: CountdownDateInput,
	currentDate?: CountdownDateInput
): CountdownDateObject {
	const endTime: number = getTimestampInMillisecond(endDate);
	let currentTime: number = 0;
	if (currentDate != null) {
		currentTime = getTimestampInMillisecond(currentTime);
	} else {
		currentTime = Date.now();
	}

	const timeLeft: number = endTime - currentTime;
	const totalTime: number = Math.floor(Math.max(0, timeLeft));
	const seconds = Math.abs(totalTime) / 1000;

	return {
		timeLeft,
		completed: totalTime <= 0,
		days: Math.floor(seconds / (3600 * 24)),
		hours: Math.floor((seconds / 3600) % 24),
		minutes: Math.floor((seconds / 60) % 60),
		seconds: Math.floor(seconds % 60),
		milliseconds: Number(((seconds % 1) * 1000).toFixed()),
	};
}

export function pad(num: number, length: number): string {
	let sNum: string = num.toString();
	while (sNum.length < length) sNum = '0' + sNum;
	return sNum;
}
