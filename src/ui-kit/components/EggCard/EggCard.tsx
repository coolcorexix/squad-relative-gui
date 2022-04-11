import { majorScalePx } from 'ui-kit/util';
import { EggCardBase, EggTag, EggCardProps } from '.';
import EggCardName from './fragments/EggCardName';
import EggCardPrice from './fragments/EggCardPrice';

function getEggTagRenderer(props: EggCardProps): JSX.Element | null {
	return (
		<EggTag backgroundColor={'primaryBlueStandard'}>
			{props.eggTagContent}
		</EggTag>
	);
}

function getEggInfoRenderer(props: EggCardProps): JSX.Element {
	const { eggData } = props;
	return (
		<>
			<EggCardName fontVariant={'s1'} name={eggData.name} />
			<EggCardPrice
				mt={majorScalePx(1)}
				price={eggData.price}
				priceIcon={eggData.priceIcon}
			/>
		</>
	);
}

function EggCard(props: EggCardProps): JSX.Element {
	const eggTag = getEggTagRenderer(props);
	const eggShape: JSX.Element = props.eggShape;
	const eggInfo = getEggInfoRenderer(props);

	return (
		<EggCardBase
			{...props}
			eggTag={eggTag}
			eggShape={eggShape}
			eggShapeProps={{
				mt: majorScalePx(6),
				maxWidth: majorScalePx(50),
			}}
			eggInfo={eggInfo}
			height={majorScalePx(77)}
			maxWidth={majorScalePx(62)}
		/>
	);
}

EggCard.defaultProps = {
	active: false,
};

export default EggCard;
