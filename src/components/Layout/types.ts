export const MediaQueries = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'] as const;

export type ColumnObject = {
	xs?: number;
	sm?: number;
	md?: number;
	lg?: number;
	xl?: number;
	xxl?: number;
};

export type GapObject = {
	xs?: number;
	sm?: number;
	md?: number;
	lg?: number;
	xl?: number;
	xxl?: number;
};

export type GridLayoutProps = {
	auto?: boolean;
	col?: number | ColumnObject;
	gap?: number | GapObject;
	gridTemplateColumns?: string;
	milestone?: typeof MediaQueries[number];
};
