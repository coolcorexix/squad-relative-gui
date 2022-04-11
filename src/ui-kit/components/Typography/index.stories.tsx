import React from 'react';
import { majorScalePx } from 'ui-kit/util/spacingRule/majorScalePx';
import { Typography } from './index';

export default {
	title: 'Components/Typography',
	component: Text,
};

export const Heading = () => {
	return (
		<div>
			<div>
				<Typography variant="h1">Heading 1</Typography>
			</div>
			<div>
				<Typography variant="h2">Heading 2</Typography>
			</div>
			<div>
				<Typography variant="h3">Heading 3</Typography>
			</div>
			<div>
				<Typography variant="h4">Heading 4</Typography>
			</div>
			<div>
				<Typography variant="h5">Heading 5</Typography>
			</div>
			<div>
				<Typography variant="h6">Heading 6</Typography>
			</div>
			<div>
				<Typography color="blue500" variant="h1">
					Heading with color
				</Typography>
			</div>
			<div>
				<Typography fontWeight={900} variant="h1">
					Heading with weight
				</Typography>
			</div>
		</div>
	);
};

export const Paragraph = () => {
	return (
		<div>
			<div>
				<Typography variant={'p1'} fontWeight={900}>
					Big - P1
				</Typography>
			</div>
			<div>
				<Typography variant={'p1'}>
					Work on the UX of you. Work on applying the UX skills you have in your
					tool belt to the way other people experience you. Rather than chasing
					the next piece of software or a fancy new way to design a drop shadow
					on a button, focus on the experience others have when they interact
					with you.
				</Typography>
			</div>
			<div>
				<Typography variant={'p2'} fontWeight={900}>
					Normal - P2
				</Typography>
			</div>
			<div>
				<Typography variant={'p2'}>
					Work on the UX of you. Work on applying the UX skills you have in your
					tool belt to the way other people experience you. Rather than chasing
					the next piece of software or a fancy new way to design a drop shadow
					on a button, focus on the experience others have when they interact
					with you.
				</Typography>
			</div>
			<div>
				<Typography variant={'p3'} fontWeight={900}>
					Small - P3
				</Typography>
			</div>
			<div>
				<Typography variant={'p3'}>
					Work on the UX of you. Work on applying the UX skills you have in your
					tool belt to the way other people experience you. Rather than chasing
					the next piece of software or a fancy new way to design a drop shadow
					on a button, focus on the experience others have when they interact
					with you.
				</Typography>
			</div>
		</div>
	);
};

export const TypographySingleLineText = () => {
	return (
		<div>
			<div>
				<Typography marginBottom={majorScalePx(2)} variant={'s1'}>
					Single line text big - S1
				</Typography>
			</div>
			<div>
				<Typography marginBottom={majorScalePx(2)} variant={'s2'}>
					Single line text normal - S2
				</Typography>
			</div>
			<div>
				<Typography
					fontWeight="bold"
					marginBottom={majorScalePx(2)}
					variant={'s3'}
				>
					Single line text small and bold - S3
				</Typography>
			</div>
		</div>
	);
};
