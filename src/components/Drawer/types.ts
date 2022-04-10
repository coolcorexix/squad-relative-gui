import { SubMenuItem } from '../Navbar/types';

export type DrawerProps = {
	anchor: 'left' | 'right' | 'top' | 'bottom';
	children?: JSX.Element;
	duration: number;
	open: boolean;
	onOpen?(): any;
	onClose?(): any;
	width?: number;
};

export type NavBarTopDownDrawerProps = DrawerProps & {
	items: Array<SubMenuItem>;
};
