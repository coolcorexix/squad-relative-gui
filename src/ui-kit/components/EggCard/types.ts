import { ReactNode } from 'react';
import { LayoutProps, SpaceProps } from 'styled-system';
import { SingleLineVariant } from 'ui-kit/components/Typography';

export type EggTagProps = LayoutProps &
	SpaceProps & {
		backgroundColor?: string;
		children: ReactNode;
		color?: string;
	};

export interface EggCardBaseProps extends LayoutProps, SpaceProps {
	active?: boolean;
	eggData?: any;
	eggTag: ReactNode;
	eggTagProps?: any;
	eggShape: JSX.Element;
	eggShapeProps?: any;
	eggInfo: JSX.Element;
	eggInfoProps?: any;
	onClick?(data: any): void;
}

export type EggData = {
	id: number | string;
	name: string;
	price?: string;
};

export type EggDataNode = EggData & {
	priceIcon?: ReactNode;
};

export type EggCardWithIDProps = Omit<
	EggCardBaseProps,
	'eggTag' | 'eggInfo'
> & {
	eggData: EggDataNode;
	hasTag?: boolean;
};

export type EggCardProps = Omit<EggCardBaseProps, 'eggTag' | 'eggInfo'> & {
	eggData: EggDataNode;
	eggTagContent: string;
};

type PropType<TObject, TProp extends keyof TObject> = TObject[TProp];

export interface EggCardIDProps extends LayoutProps, SpaceProps {
	eggId: PropType<EggData, 'id'>;
}

export interface EggCardNameProps extends LayoutProps, SpaceProps {
	name: PropType<EggData, 'name'>;
	fontVariant: SingleLineVariant;
}

export interface EggCardPriceProps extends LayoutProps, SpaceProps {
	price: PropType<EggData, 'price'>;
	priceIcon: PropType<EggDataNode, 'priceIcon'>;
}
