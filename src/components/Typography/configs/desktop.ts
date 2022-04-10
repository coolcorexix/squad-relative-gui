import {
	HeaderVariants,
	ParagraphVariants,
	SingleLineVariants,
} from '../types';

export const DesktopHeadersValue = {
	[HeaderVariants.H1]: {
		fontSize: '60px',
		lineHeight: '72px',
	},
	[HeaderVariants.H2]: {
		fontSize: '50px',
		lineHeight: '64px',
	},
	[HeaderVariants.H3]: {
		fontSize: '40px',
		lineHeight: '56px',
	},
	[HeaderVariants.H4]: {
		fontSize: '32px',
		lineHeight: '48px',
	},
	[HeaderVariants.H5]: {
		fontSize: '20px',
		lineHeight: '32px',
	},
	[HeaderVariants.H6]: {
		fontSize: '16px',
		lineHeight: '24px',
	},
};

export const DesktopParagraphsValue = {
	[ParagraphVariants.P1]: {
		fontSize: '16px',
		fontFamily: `'DM sans', sans-serif`,
		lineHeight: '24px',
	},
};

export const DesktopSingleLinesValue = {
	[SingleLineVariants.S1]: {
		fontSize: '16px',
		lineHeight: '24px',
	},
};
