import {
	DesktopHeadersValue,
	DesktopParagraphsValue,
	DesktopSingleLinesValue,
	MobileHeadersValue,
	MobileParagraphsValue,
	MobileSingleLinesValue,
} from './configs';

export const TypographyVariantsBigValue = {
	...DesktopHeadersValue,
	...DesktopParagraphsValue,
	...DesktopSingleLinesValue,
};

export const TypographyVariantsSmallValue = {
	...MobileHeadersValue,
	...MobileParagraphsValue,
	...MobileSingleLinesValue,
};
