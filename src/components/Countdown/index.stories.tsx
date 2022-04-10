import Countdown from './Countdown';
import PreorderCountdownComp from './PreorderCountdown';
import { CountdownProps } from './types';

const index = {
	title: 'Components/Countdown',
	component: Countdown,
	argTypes: {
		endTime: {
			defaultValue: 1632593714000,
			control: { type: 'number' },
		},
	},
};
export default index;

export const Default = (props: CountdownProps) => {
	return (
		<div>
			<Countdown endTime={props.endTime} />
		</div>
	);
};

export const PreorderCountdown = (props: CountdownProps) => {
	return <PreorderCountdownComp endTime={props.endTime} maxWidth={'300px'} />;
};
