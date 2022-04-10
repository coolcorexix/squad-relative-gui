import React from 'react';
import BoxComponent from './Box';
import FlexComponent from './Flex';
import GridComponent from './Grid';
import PercentageComponent from './PercentageBox';
import { Typography } from 'components/Typography';

const Primitives = {
	title: 'Components/Primitives',
	component: BoxComponent,
	argTypes: {},
};
export default Primitives;

export const Box: React.FC = () => {
	return (
		<div>
			<BoxComponent as="p">
				Contains background, border, layout, position, and space from{' '}
				<a
					rel="noreferrer"
					href="https://styled-system.com/api"
					target="_blank"
				>
					Styled System&lsquo;s API
				</a>
			</BoxComponent>
		</div>
	);
};

export const Flex: React.FC = () => {
	return (
		<div>
			<Typography variant={'h3'}>
				Based on the Box component. You can apply any flexbox properties on the
				Flex component.
			</Typography>
			<a
				rel="noreferrer"
				href="https://styled-system.com/api#flexbox"
				target="_blank"
			>
				List of applicable props
			</a>
			<FlexComponent justifyContent="space-between" mt="40px">
				<span>Left</span>
				<span>right</span>
			</FlexComponent>
			<FlexComponent justifyContent="center" mt="8px">
				<span>center</span>
			</FlexComponent>
		</div>
	);
};

export const Grid: React.FC = () => {
	return (
		<GridComponent
			justifyItems="center"
			alignContent="center"
			gridTemplateColumns="1fr 1fr"
			gridColumnGap="16px"
			style={{ backgroundColor: '#7645D9' }}
		>
			<BoxComponent
				style={{ backgroundColor: '#1fc7d4', width: '300px', height: '300px' }}
			/>
			<BoxComponent
				style={{ backgroundColor: '#1fc7d4', width: '300px', height: '300px' }}
			/>
		</GridComponent>
	);
};

export const PercentageBox = () => {
	return (
		<PercentageComponent
			background={'#F00'}
			pWidth={[100, 800]}
			pHeight={[100, 500]}
			minScreenWidth={375}
			maxScreenWidth={1440}
		>
			<Typography variant={'h3'}>Resize window to see effect</Typography>
		</PercentageComponent>
	);
};
