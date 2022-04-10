import { LayoutProps, SpaceProps, TypographyProps } from 'styled-system';

export interface TextProps extends SpaceProps, TypographyProps, LayoutProps {
	color?: string;
	bold?: boolean;
	ellipsis?: boolean;
}

export const HeaderVariants = {
	H1: 'h1',
	H2: 'h2',
	H3: 'h3',
	H4: 'h4',
	H5: 'h5',
	H6: 'h6',
};
export type HeaderVariant = typeof HeaderVariants[keyof typeof HeaderVariants];

export const ParagraphVariants = {
	P1: 'p1',
};
export type ParagraphVariant =
	typeof ParagraphVariants[keyof typeof ParagraphVariants];

export const SingleLineVariants = {
	S1: 's1',
};
export type SingleLineVariant =
	typeof SingleLineVariants[keyof typeof SingleLineVariants];

export interface ITypographyProps extends TextProps {
	variant: HeaderVariant | ParagraphVariant | SingleLineVariant;
}

export interface IDynamicTypographyProps extends TextProps {
	variants: {
		xs?: HeaderVariant | ParagraphVariant | SingleLineVariant;
		sm?: HeaderVariant | ParagraphVariant | SingleLineVariant;
		md?: HeaderVariant | ParagraphVariant | SingleLineVariant;
		lg?: HeaderVariant | ParagraphVariant | SingleLineVariant;
		xl?: HeaderVariant | ParagraphVariant | SingleLineVariant;
		xsl?: HeaderVariant | ParagraphVariant | SingleLineVariant;
	};
}
