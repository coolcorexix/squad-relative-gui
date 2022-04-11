import { majorScalePx } from 'ui-kit/util';
import { EggCardBase, EggTag, EggCardWithIDProps } from '.';
import EggCardName from './fragments/EggCardName';
import EggCardPrice from './fragments/EggCardPrice';
import EggCardID from './fragments/EggCardID';

function getEggTagRenderer(props: EggCardWithIDProps): JSX.Element | null {
	return props.hasTag ? (
		<EggTag backgroundColor={'backgroundSuccess'}>Selling</EggTag>
	) : null;
}

function getEggInfoRenderer(props: EggCardWithIDProps): JSX.Element {
	const { eggData } = props;
	return (
		<>
			<EggCardID mt={majorScalePx(4)} eggId={eggData.id} />
			<EggCardName mb={majorScalePx(2)} name={eggData.name} />
			<EggCardPrice price={eggData.price} priceIcon={eggData.priceIcon} />
		</>
	);
}

function EggCardWithID(props: EggCardWithIDProps): JSX.Element {
	const { hasTag } = props;
	const eggTag = getEggTagRenderer(props);
	const eggShape: JSX.Element = props.eggShape;
	const eggInfo = getEggInfoRenderer(props);

	return (
		<EggCardBase
			{...props}
			eggTag={eggTag}
			eggTagProps={{
				mb: hasTag ? majorScalePx(2) : 0,
			}}
			eggShape={eggShape}
			eggShapeProps={{
				mt: !hasTag ? majorScalePx(8) : 0,
			}}
			eggInfo={eggInfo}
			height={majorScalePx(64)}
			maxWidth={majorScalePx(42)}
		/>
	);
}

EggCardWithID.defaultProps = {
	active: false,
	hasTag: false,
};

export default EggCardWithID;
