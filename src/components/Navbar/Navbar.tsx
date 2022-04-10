import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { BoxContainer } from 'components/Box';
import { Button } from 'components/Button';
import { NavbarTopDownDrawer } from 'components/Drawer';
import { CloseIcon, HamburgerIcon } from 'components/Icon';
import { Image } from 'components/Image';
import { LayoutCenter, majorScalePx } from 'components/utils';
import { getPublicImageResource } from 'utils/getResource';
import SubMenu from './SubMenu';
import { SubMenuItems } from './constant';
import { fadeIn, fadeOut } from './styles';
import ScrollDetector, { ScrollDetectorEvent } from 'utils/scrollDetector';
import { PaddingX } from 'styles/constants';

export const NavbarHeight = 96;

const NavbarContainer = styled.nav<{ ref: any }>`
	${LayoutCenter};
	background: ${({ theme }) => theme.colors.backgroundNavbar};
	height: ${NavbarHeight}px;
	left: 0;
	padding-left: ${majorScalePx(4)};
	padding-right: ${majorScalePx(4)};
	position: fixed;
	top: 0;
	width: 100%;
	z-index: ${({ theme }) => theme.zIndices.navbar};

	${({ theme }) => theme.mediaQueries.md} {
		padding-left: ${PaddingX};
		padding-right: ${PaddingX};
	}

	&.--scroll-up {
		animation: ${fadeOut} 200ms cubic-bezier(0.17, 0.67, 0.83, 0.67) 0s 1
			alternate;
		transform: translateY(-100px);
	}

	&.--scroll-down {
		animation: ${fadeIn} 220ms linear 0s 1 alternate;
		transform: translateY(0);
	}
`;

const NavbarContent = styled.div`
	display: flex;
	justify-content: space-between;
	height: 100%;
	width: 100%;
`;

const LogoContainer = styled.a`
	align-items: center;
	cursor: pointer;
	display: flex;
	justify-content: flex-start;
	width: 155px;
`;

const MenuDesktopContainer = styled.div`
	align-items: center;
	display: none;
	justify-content: flex-end;
	width: 75%;

	${({ theme }) => theme.mediaQueries.md} {
		display: flex;
	}
`;

const MenuMobileContainer = styled.div`
	align-items: center;
	display: flex;
	justify-content: flex-end;

	${({ theme }) => theme.mediaQueries.md} {
		display: none;
	}
`;

function CollapseButton(props: {
	open: boolean;
	onClick(isOpen: boolean): void;
}): JSX.Element {
	if (props.open) {
		return (
			<CloseIcon
				color={'#fff'}
				onClick={() => {
					props.onClick(false);
				}}
				height={24}
				width={24}
			/>
		);
	}
	return (
		<HamburgerIcon
			onClick={() => {
				props.onClick(true);
			}}
			height={24}
			width={24}
		/>
	);
}

function Navbar() {
	const containerRef = useRef<HTMLDivElement>();
	const [visible, setVisible] = useState(false);
	
	const toggleDropDown = (isOpen: boolean): void => {
		setVisible(isOpen);
		if (isOpen) {
			document.body.style.overflowY = 'hidden';
		} else {
			document.body.style.overflowY = 'auto';
		}
	};
	
	useEffect(() => {
		let classType = 0;
		const registerScrollEvent = (scrollEvent: ScrollDetectorEvent) => {
			if (!containerRef.current) return;
			if (scrollEvent.vertical === 'up' && classType !== 1) {
				classType = 1;
				containerRef.current.classList.remove('--scroll-up');
				containerRef.current.classList.add('--scroll-down');
			} else if (scrollEvent.vertical === 'down' && classType !== -1) {
				classType = -1;
				containerRef.current.classList.remove('--scroll-down');
				containerRef.current.classList.add('--scroll-up');
			}
		};
		
		ScrollDetector.on(registerScrollEvent);
		return () => {
			ScrollDetector.omit(registerScrollEvent);
		};
	}, []);
	
	return (
		<>
			<NavbarTopDownDrawer items={SubMenuItems} open={visible} />
			<NavbarContainer ref={containerRef}>
				<BoxContainer>
					<NavbarContent>
						<LogoContainer>
							<Image
								alt={'Logo'}
								src={getPublicImageResource('logo.png')}
								height={72}
								width={155}
							/>
						</LogoContainer>
						<MenuDesktopContainer>
							<SubMenu items={SubMenuItems} />
							<Button minWidth={'256px'}>
								Connect wallet
							</Button>
						</MenuDesktopContainer>
						<MenuMobileContainer>
							<CollapseButton open={visible} onClick={toggleDropDown} />
						</MenuMobileContainer>
					</NavbarContent>
				</BoxContainer>
			</NavbarContainer>
		</>
	);
}

export default Navbar;
