import { Pagination, PaginationProps } from '.';

const index = {
	title: 'Components/Pagination',
	component: Pagination,
	argTypes: {},
};
export default index;

export const Default = (props: PaginationProps) => {
	return <Pagination {...props} />;
};
