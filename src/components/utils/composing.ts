import {
	background,
	BackgroundProps,
	borders,
	BordersProps,
	color,
	ColorProps,
	compose,
	flexbox,
	FlexboxProps,
	layout,
	LayoutProps,
	position,
	PositionProps,
	shadow,
	ShadowProps,
	space,
	SpaceProps,
	typography,
	TypographyProps,
} from 'styled-system';

const composed = compose(
	background,
	borders,
	color,
	flexbox,
	layout,
	position,
	space,
	shadow,
	typography
);

export type ComposedProps = BackgroundProps &
	BordersProps &
	ColorProps &
	FlexboxProps &
	LayoutProps &
	PositionProps &
	ShadowProps &
	SpaceProps &
	TypographyProps;

export { composed as default };
