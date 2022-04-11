import { BnBCoin, SampleEgg } from 'ui-kit/components/Svg';
import { EggCard, EggCardWithID, EggDataNode } from '../EggCard';
import { Dashboard } from '.';

const index = {
	title: 'Components/Dashboard',
	component: Dashboard,
	argTypes: {},
};
export default index;

const BigEgg = <SampleEgg height={160} width={200} />;
const SmallEgg = <SampleEgg height={104} width={136} />;

const EggItems = [...Array(23)].map((item, index) => {
	const data: EggDataNode = {
		id: `# ${index}`,
		name: 'Selling Dragon Egg',
		price: '0.244',
		priceIcon: <BnBCoin />,
	};
	return (
		<EggCard eggData={data} eggShape={BigEgg} eggTagContent={'20 items left'} />
	);
});

export const Cards = () => {
	return <Dashboard items={EggItems} />;
};

const EggItemsWithID = [...Array(23)].map((item, index) => {
	const data: EggDataNode = {
		id: `# ${index}`,
		name: 'Selling Dragon Egg',
		price: '0.1245 BNB',
	};
	return (
		<EggCardWithID
			key={index}
			eggData={data}
			eggShape={SmallEgg}
			hasTag={Math.random() > 0.5}
		/>
	);
});

export const CardsWithID = () => {
	return <Dashboard items={EggItemsWithID} maxColumns={6} itemsPerPage={12} />;
};
