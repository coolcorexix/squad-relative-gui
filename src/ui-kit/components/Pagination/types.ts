import { ComponentProps, ElementType } from 'react';
import { LayoutProps, SpaceProps } from 'styled-system';

export type PaginationItemProps<P extends ElementType = 'input'> =
	ComponentProps<P> & {
		max: number;
		page: number;
		onChangeValue?(value: number): void;
	};

export type PageChangeData = {
	current: number;
};

export interface PaginationProps extends LayoutProps, SpaceProps {
	count: number;
	defaultPage?: number;
	onPageChange?(data: PageChangeData): void;
}
