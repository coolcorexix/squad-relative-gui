import React from 'react';
import { majorScalePx } from 'components/utils/spacingRule/majorScalePx';
import { Typography } from '.';

const index = {
	title: 'Components/Typography',
	component: Text,
};
export default index;

export const Heading = () => {
	return (
		<div>
			<Typography variant={'h1'}>Heading 1</Typography>
			<Typography variant={'h2'}>Heading 2</Typography>
			<Typography variant={'h3'}>Heading 3</Typography>
			<Typography variant={'h4'}>Heading 4</Typography>
			<Typography variant={'h5'}>Heading 5</Typography>
			<Typography variant={'h6'}>Heading 6</Typography>
			<Typography variant={'h1'} color={'blue500'}>
				Heading with color
			</Typography>
			<Typography variant={'h1'} fontWeight={900}>
				Heading with weight
			</Typography>
		</div>
	);
};

export const Paragraph = () => {
	return (
		<div>
			<Typography variant={'p1'}>Paragraph 1</Typography>
			<Typography variant={'p1'} color={'blue500'}>
				Paragraph 1 with color
			</Typography>
			<Typography variant={'p1'} fontWeight={900}>
				Paragraph 1 with weight
			</Typography>
		</div>
	);
};

export const SingleLine = () => {
	return (
		<div>
			<Typography variant={'s1'} marginBottom={majorScalePx(2)}>
				Single line
			</Typography>
			<Typography
				variant={'s1'}
				color={'blue500'}
				marginBottom={majorScalePx(2)}
			>
				Single line with color
			</Typography>
			<Typography variant={'s1'} fontWeight={900}>
				Single line with weight
			</Typography>
		</div>
	);
};
