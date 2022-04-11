import { ReactNode } from 'react';
import { LayoutProps, SpaceProps } from 'styled-system';

export interface DashboardProps extends LayoutProps, SpaceProps {
	defaultPage?: number;
	items: Array<ReactNode>;
	itemsPerPage?: number;
	maxColumns?: number;
}
