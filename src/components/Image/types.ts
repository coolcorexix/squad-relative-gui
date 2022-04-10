import { HTMLAttributes, ImgHTMLAttributes, ReactElement } from 'react';
import { BorderProps, SpaceProps } from 'styled-system';

export interface WrapperProps
	extends SpaceProps,
		HTMLAttributes<HTMLDivElement> {
	width: number;
	height: number;
}

export interface ImageProps
	extends ImgHTMLAttributes<HTMLImageElement>,
		BorderProps,
		SpaceProps {
	width: number;
	height: number;
	objectFit?: string;
	wrapperProps?: WrapperProps;
}

export interface BackgroundImageProps extends ImageProps {
	loadingPlaceholder?: ReactElement;
}
