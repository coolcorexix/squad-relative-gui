import { LayoutProps } from 'styled-system';
import { Grid } from '../Box';
import {
	CountdownDateRenderer,
	CountdownProps,
	PreorderCountdownProps,
	PreorderCountdownTimerProps,
} from './types';
import Countdown from './Countdown';
import {
	PreorderCountdownContainer,
	PreorderCountdownTimerContainer,
	PreorderCountdownTimerNumber,
	PreorderCountdownTimerTitle,
	PreorderCountdownTitleContainer,
} from './styles';
import { Typography } from '../Typography';

function PreorderCountdownTimer(props: PreorderCountdownTimerProps) {
	return (
		<PreorderCountdownTimerContainer>
			<PreorderCountdownTimerNumber>
				<Typography color={'primaryGreen'} variant={'h3'}>
					{props.timer}
				</Typography>
			</PreorderCountdownTimerNumber>
			<PreorderCountdownTimerTitle>
				<Typography color={'textBody'} variant={'h6'}>
					{props.title}
				</Typography>
			</PreorderCountdownTimerTitle>
		</PreorderCountdownTimerContainer>
	);
}

function PreorderCountdownComp(props: PreorderCountdownProps & LayoutProps) {
	const { day, hours, minutes, seconds } = props;
	return (
		<PreorderCountdownContainer {...props}>
			<PreorderCountdownTitleContainer>
				<Typography variant={'h5'}>Pre-oder end in</Typography>
			</PreorderCountdownTitleContainer>
			<Grid
				justifyItems={'center'}
				alignContent={'center'}
				gridTemplateColumns={'1fr 13px 1fr 13px 1fr 13px 1fr'}
			>
				<PreorderCountdownTimer timer={day} title={'DAYS'} />
				<Typography variant={'h3'}>:</Typography>
				<PreorderCountdownTimer timer={hours} title={'HOURS'} />
				<Typography variant={'h3'}>:</Typography>
				<PreorderCountdownTimer timer={minutes} title={'MINS'} />
				<Typography variant={'h3'}>:</Typography>
				<PreorderCountdownTimer timer={seconds} title={'SECS'} />
			</Grid>
		</PreorderCountdownContainer>
	);
}

function PreorderCountdown(props: CountdownProps & LayoutProps) {
	return (
		<Countdown endTime={props.endTime}>
			{({ time }: { time: CountdownDateRenderer }) => (
				<PreorderCountdownComp
					{...props}
					day={time.days}
					hours={time.hours}
					minutes={time.minutes}
					seconds={time.seconds}
				/>
			)}
		</Countdown>
	);
}

export default PreorderCountdown;
