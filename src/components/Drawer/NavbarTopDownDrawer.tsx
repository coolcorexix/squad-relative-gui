import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { PercentageBox } from 'components/Box';
import { NavbarSubMenuItem } from 'components/Navbar';
import { LayoutCenter, majorScalePx } from 'components/utils';
import { getPublicImageResource } from 'utils/getResource';
import { safeRun } from 'utils/safe-run';
import { NavBarTopDownDrawerProps } from './types';
import Drawer from './Drawer';

const NavbarTopDownDrawerContainer = styled.div`
	${LayoutCenter};
	background-image: url(${getPublicImageResource('main-background.webp')});
	background-size: cover;
	background-position-y: 100px;
	height: 100%;
	width: 100%;
`;

const SubMenuItemContainer = styled.div``;

const LeftBottomHeroContainer = styled.div`
	bottom: 0;
	left: 0;
	position: absolute;
`;

const HeroContent = styled.div<{ backgroundImage: string }>`
	background-image: url(${({ backgroundImage }) => backgroundImage});
	background-repeat: no-repeat;
	background-size: contain;
	height: 100%;
	width: 100%;
`;

function NavbarTopDownDrawer(props: NavBarTopDownDrawerProps): JSX.Element {
	const { items } = props;
	const [activeItem, setActiveItem] = useState(items[0]);

	useEffect(() => {
		setActiveItem(items[0]);
	}, [items]);

	return (
		<Drawer {...props}>
			<NavbarTopDownDrawerContainer>
				<SubMenuItemContainer>
					{items.map((item, index) => {
						const onClickSubMenuItem = (): void => {
							setActiveItem(item);
							safeRun(item.onClick)(item);
						};
						return (
							<NavbarSubMenuItem
								key={item.text}
								item={item}
								marginBottom={index === items.length - 1 ? 0 : majorScalePx(10)}
								onClick={onClickSubMenuItem}
								textAlign={'center'}
								textColor={item === activeItem ? 'bronze' : 'white'}
							/>
						);
					})}
				</SubMenuItemContainer>
				{/*<LeftBottomHeroContainer>*/}
				{/*	<PercentageBox*/}
				{/*		pWidth={[146, 253]}*/}
				{/*		pHeight={[166, 288]}*/}
				{/*		minScreenWidth={375}*/}
				{/*		maxScreenWidth={768}*/}
				{/*	>*/}
				{/*		<HeroContent*/}
				{/*			backgroundImage={getPublicImageResource('partner-hero-1.webp')}*/}
				{/*		/>*/}
				{/*	</PercentageBox>*/}
				{/*</LeftBottomHeroContainer>*/}
			</NavbarTopDownDrawerContainer>
		</Drawer>
	);
}

NavbarTopDownDrawer.defaultProps = {
	anchor: 'top',
	duration: 150,
};

export default NavbarTopDownDrawer;
