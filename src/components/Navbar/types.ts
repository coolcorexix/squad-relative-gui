import { SpaceProps, TypographyProps } from 'styled-system';

export type SubMenuProps = {
	items: Array<SubMenuItem>;
};

export type SubMenuItem = {
	text: string;
	styles?: any;
	onClick?(): void;
};

export type NavbarSubMenuItemProps = TypographyProps &
	SpaceProps & {
		item: SubMenuItem;
		onClick?(): void;
		textColor?: string;
	};
