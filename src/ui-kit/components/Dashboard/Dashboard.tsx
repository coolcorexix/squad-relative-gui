import { useState } from 'react';
import { GridLayout } from '../Layout';
import { Pagination, PageChangeData } from '../Pagination';
import { DashboardProps } from './types';
import {
	DashboardContainer,
	GridLayoutContainer,
	PaginationContainer,
} from './styles';
import { majorScalePx } from 'ui-kit/util';

function getTotalPageCount(
	itemsCount: number,
	itemsPerPage: number = 8
): number {
	return Math.ceil(itemsCount / itemsPerPage);
}

function getItemsAPageRenderer<T>(
	items: Array<T>,
	itemsPerPage: number = 8,
	currentPage: number = 1
): Array<T> {
	const minIndex: number = Math.max(0, (currentPage - 1) * itemsPerPage);
	const maxIndex: number = Math.min(
		items.length - 1,
		itemsPerPage * currentPage - 1
	);
	const renderItems: Array<T> = items.slice(minIndex, maxIndex + 1);
	return renderItems.map((item) => item);
}

function Dashboard(props: DashboardProps) {
	const { defaultPage, items, itemsPerPage, maxColumns } = props;
	const [currentPage, setCurrentPage] = useState(defaultPage);

	const onPageChange = (data: PageChangeData) => {
		setCurrentPage(data.current);
	};

	return (
		<DashboardContainer>
			<GridLayoutContainer>
				<GridLayout
					alignItems={'center'}
					col={Math.min(maxColumns as number, items.length)}
				>
					{getItemsAPageRenderer(items, itemsPerPage, currentPage)}
				</GridLayout>
			</GridLayoutContainer>
			<PaginationContainer>
				<Pagination
					count={getTotalPageCount(items.length, itemsPerPage)}
					mt={majorScalePx(12)}
					onPageChange={onPageChange}
				/>
			</PaginationContainer>
		</DashboardContainer>
	);
}

Dashboard.defaultProps = {
	defaultPage: 1,
	items: [],
	maxColumns: 4,
	itemsPerPage: 8,
};
export default Dashboard;
