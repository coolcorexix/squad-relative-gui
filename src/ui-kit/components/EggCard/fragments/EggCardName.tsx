import { Typography } from 'ui-kit/components/Typography';
import { EggCardNameLabel } from '../styles';
import { EggCardNameProps } from '../types';

function EggCardName(props: EggCardNameProps) {
	return (
		<EggCardNameLabel {...props}>
			<Typography variant={props.fontVariant} textAlign={'center'}>
				{props.name}
			</Typography>
		</EggCardNameLabel>
	);
}

EggCardName.defaultProps = {
	fontVariant: 's2',
};

export default EggCardName;
