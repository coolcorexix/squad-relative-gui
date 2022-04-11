import { Typography } from 'ui-kit/components/Typography';
import { EggCardIDLabel } from '../styles';
import { EggCardIDProps } from '../types';

function EggCardID(props: EggCardIDProps): JSX.Element {
	return (
		<EggCardIDLabel {...props}>
			<Typography color={'primaryBlueStandard'} variant={'s3'}>
				{props.eggId}
			</Typography>
		</EggCardIDLabel>
	);
}

export default EggCardID;
