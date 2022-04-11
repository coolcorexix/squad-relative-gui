import { Typography } from 'ui-kit/components/Typography';
import { BnBCoin, SampleEgg } from '../Svg';
import { EggCard, EggCardBase, EggCardWithID, EggTag } from '.';
import { EggDataNode } from './types';

const index = {
	title: 'Components/EggCard',
	component: EggCardBase,
};
export default index;

const BigEgg = <SampleEgg height={160} width={200} />;
const SmallEgg = <SampleEgg height={104} width={136} />;

export const Base = () => {
	const eggTag: JSX.Element = (
		<EggTag backgroundColor={'backgroundSuccess'}>Selling</EggTag>
	);
	const eggShape: JSX.Element = BigEgg;
	const eggInfo: JSX.Element = (
		<div>
			<Typography variant={'s3'}>Id: 1</Typography>
			<Typography variant={'s1'}>Chúa tể bóng đêm</Typography>
		</div>
	);
	return <EggCardBase eggTag={eggTag} eggShape={eggShape} eggInfo={eggInfo} />;
};

export const WithID = () => {
	const sellingData: EggDataNode = {
		id: '# 1',
		name: 'Selling Dragon Egg',
		price: '0.1245 BNB',
	};
	const data: EggDataNode = {
		id: '# 2',
		name: 'Dragon Egg',
	};
	return (
		<div>
			<EggCardWithID eggData={sellingData} eggShape={SmallEgg} hasTag mr={4} />
			<EggCardWithID eggData={data} eggShape={SmallEgg} />
		</div>
	);
};

export const Card = () => {
	const sellingData: EggDataNode = {
		id: '# 1',
		name: 'Selling Dragon Egg',
		price: '0.244',
		priceIcon: <BnBCoin />,
	};
	return (
		<div>
			<EggCard
				eggData={sellingData}
				eggShape={BigEgg}
				eggTagContent={'20 items left'}
				mr={4}
			/>
			<EggCard
				eggData={sellingData}
				eggShape={BigEgg}
				eggTagContent={'20 items left'}
			/>
		</div>
	);
};

export const Tag = () => {
	return (
		<>
			<EggTag backgroundColor={'backgroundSuccess'}>Selling</EggTag>;
			<EggTag backgroundColor={'primaryBlueStandard'}>20 items left</EggTag>;
		</>
	);
};
