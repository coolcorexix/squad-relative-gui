export type CountdownDateInput = Date | number | string;

export type CountdownDateObject = {
	timeLeft: number;
	completed: boolean;
	days: number;
	hours: number;
	minutes: number;
	seconds: number;
	milliseconds: number;
};

export type CountdownDateRenderer = {
	days: string;
	hours: string;
	minutes: string;
	seconds: string;
	milliseconds: string;
};

export type TimeFormat = {
	day: 'DD' | 'dd' | 'none';
	hour: 'HH' | 'hh' | 'none';
	minute: 'MM' | 'mm' | 'none';
	second: 'SS' | 'ss' | 'none';
	millisecond: 0 | 1 | 2 | 3 | 'none';
};

export type CountdownProps = {
	children?: any;
	endTime: CountdownDateInput;
	startTime?: CountdownDateInput;
	fontSize?: number;
	format?: TimeFormat;
	onComplete?(): any;
};

export type PreorderCountdownProps = {
	day: number | string;
	hours: number | string;
	minutes: number | string;
	seconds: number | string;
};

export type PreorderCountdownTimerProps = {
	timer: number | string;
	title: string;
};
