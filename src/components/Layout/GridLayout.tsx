import styled from 'styled-components';
import Grid from '../Box/Grid';
import { GridLayoutProps, MediaQueries } from './types';

function getValidBackwardValue(
	object: any,
	mediaQueries: typeof MediaQueries[number],
	defaultValue: number | string
): number | string {
	const milestoneIndex: number = MediaQueries.indexOf(mediaQueries);
	for (let i = milestoneIndex; i >= 0; i--) {
		if (object[MediaQueries[i]] != null) {
			return object[MediaQueries[i]];
		}
	}
	return defaultValue;
}

function getColumn(
	col: any,
	mediaQueries: typeof MediaQueries[number],
	auto: boolean = true,
	milestone: typeof MediaQueries[number] = 'lg'
): number {
	if (typeof col === 'number') {
		if (!auto) return col;
		const milestoneIndex: number = MediaQueries.indexOf(milestone);
		for (let i = milestoneIndex; i >= 0; i--) {
			if (mediaQueries === MediaQueries[i]) {
				return Math.max(1, col - milestoneIndex + i);
			}
		}
		return col;
	}
	if (col) return getValidBackwardValue(col, mediaQueries, 4) as number;
	return 3;
}

function getGapPx(gap: any, mediaQueries: typeof MediaQueries[number]): string {
	if (typeof gap === 'number') {
		return gap + 'px';
	}
	if (gap) return getValidBackwardValue(gap, mediaQueries, 24) + 'px';
	return `24px`;
}

const GridLayout = styled(Grid)<GridLayoutProps>`
	--col: ${({ auto, col, milestone }) => getColumn(col, 'xs', auto, milestone)};
	grid-template-columns: ${({ gridTemplateColumns }) =>
		gridTemplateColumns ? gridTemplateColumns : 'repeat(var(--col), 1fr)'};
	grid-gap: ${({ gap }) => getGapPx(gap, 'xs')};

	// SM
	${({ theme }) => theme.mediaQueries.sm} {
		--col: ${({ auto, col, milestone }) =>
			getColumn(col, 'sm', auto, milestone)};
		grid-gap: ${({ gap }) => getGapPx(gap, 'sm')};
	}

	// MD
	${({ theme }) => theme.mediaQueries.md} {
		--col: ${({ auto, col, milestone }) =>
			getColumn(col, 'md', auto, milestone)};
		grid-gap: ${({ gap }) => getGapPx(gap, 'md')};
	}

	// LG
	${({ theme }) => theme.mediaQueries.lg} {
		--col: ${({ auto, col, milestone }) =>
			getColumn(col, 'lg', auto, milestone)};
		grid-gap: ${({ gap }) => getGapPx(gap, 'lg')};
	}
`;

GridLayout.defaultProps = {
	auto: true,
	col: 4,
	gap: 24,
};
export default GridLayout;
