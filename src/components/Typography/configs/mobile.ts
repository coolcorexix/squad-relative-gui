import {
	HeaderVariants,
	ParagraphVariants,
	SingleLineVariants,
} from '../types';

export const MobileHeadersValue = {
	[HeaderVariants.H1]: {
		fontSize: '40px',
		lineHeight: '56px',
	},
	[HeaderVariants.H2]: {
		fontSize: '36px',
		lineHeight: '48px',
	},
	[HeaderVariants.H3]: {
		fontSize: '32px',
		lineHeight: '48px',
	},
	[HeaderVariants.H4]: {
		fontSize: '24px',
		lineHeight: '32px',
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

export const MobileParagraphsValue = {
	[ParagraphVariants.P1]: {
		fontSize: '16px',
		fontFamily: `'DM sans', sans-serif`,
		lineHeight: '24px',
	},
};

export const MobileSingleLinesValue = {
	[SingleLineVariants.S1]: {
		fontSize: '16px',
		lineHeight: '24px',
	},
};
