import { useState } from 'react';
import { LeftArrowIcon, RightArrowIcon } from 'ui-kit/components/Icon';
import { Typography } from 'ui-kit/components/Typography';
import IconButton from '../Button/IconButton';
import { PaginationContainer, PaginationContent } from './styles';
import PaginationItem from './PaginationItem';
import { PaginationProps } from './types';

function Pagination(props: PaginationProps): JSX.Element {
	const { count, defaultPage, onPageChange: onChangeProps } = props;
	const [page, setPage] = useState(defaultPage ?? 1);

	const onPageChange = (value: number) => {
		setPage(value);
		if (onChangeProps) {
			onChangeProps({
				current: value,
			});
		}
	};

	const onClickPrevious = (): void => {
		if (page <= 1) return;
		onPageChange(page - 1);
	};

	const onClickNext = (): void => {
		if (page >= count) return;
		onPageChange(page + 1);
	};

	const onChangeManipulation = (value: number): void => {
		onPageChange(value);
	};

	return (
		<PaginationContainer {...props}>
			<IconButton
				disabled={page === 1}
				onClick={onClickPrevious}
				variant={'secondary'}
			>
				<LeftArrowIcon color={'#A1A3A8'} />
			</IconButton>
			<PaginationContent>
				<Typography variant={'s2'} color={'textBody'} mr={2}>
					Page
				</Typography>
				<PaginationItem
					max={count}
					page={page}
					onChangeValue={onChangeManipulation}
				/>
				<Typography variant={'s2'} color={'textBody'} ml={2}>
					of {count}
				</Typography>
			</PaginationContent>
			<IconButton
				disabled={page === count}
				onClick={onClickNext} variant={'secondary'}>
				<RightArrowIcon color={'#A1A3A8'} />
			</IconButton>
		</PaginationContainer>
	);
}

Pagination.defaultProps = {
	count: 10,
	defaultPage: 1,
};

export default Pagination;
