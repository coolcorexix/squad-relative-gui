import { Typography } from 'ui-kit/components/Typography';
import { majorScalePx } from 'ui-kit/util';
import { EggCardPriceIconContainer, EggCardPriceLabel } from '../styles';
import { EggCardPriceProps } from '../types';

function EggCardPrice(props: EggCardPriceProps) {
	return (
		<EggCardPriceLabel {...props}>
			<Typography
				color={'textBody'}
				mr={props.priceIcon ? majorScalePx(2) : '0px'}
				variant={'s1'}
			>
				{props.price}
			</Typography>
			<EggCardPriceIconContainer
				height={props.priceIcon ? majorScalePx(4) : '0px'}
				width={props.priceIcon ? majorScalePx(4) : '0px'}
			>
				{props.priceIcon}
			</EggCardPriceIconContainer>
		</EggCardPriceLabel>
	);
}

export default EggCardPrice;
