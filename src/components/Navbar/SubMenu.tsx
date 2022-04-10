import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { safeRun } from 'utils/safe-run';
import { Typography } from '../Typography';
import { majorScalePx } from '../utils';
import { SubMenuProps } from './types';
import NavbarSubMenuItem from './NavbarSubMenuItem';

const SubMenuContainer = styled.div`
	align-items: center;
	display: flex;
	justify-content: space-between;
	margin-right: ${majorScalePx(11)};
`;

function SubMenu(props: SubMenuProps) {
	const { items } = props;
	const [activeItem, setActiveItem] = useState(items[0]);

	useEffect(() => {
		setActiveItem(items[0]);
	}, [items]);

	return (
		<SubMenuContainer>
			{items.map((item) => {
				const onClickSubMenuItem = (): void => {
					setActiveItem(item);
					safeRun(item.onClick)(item);
				};
				return (
					<NavbarSubMenuItem
						key={item.text}
						item={item}
						onClick={onClickSubMenuItem}
						textColor={item === activeItem ? 'bronze' : 'white'}
					/>
				);
			})}
		</SubMenuContainer>
	);
}

SubMenu.defaultProps = {
	items: [],
};

export default SubMenu;
