import {
	HeaderVariants,
	ParagraphVariants,
	SingleLineVariants,
} from '../types';

export const DesktopHeadersValue = {
	[HeaderVariants.H1]: {
		fontSize: '40px',
		fontWeight: 500,
		lineHeight: '56px',
	},
	[HeaderVariants.H2]: {
		fontSize: '34px',
		fontWeight: 500,
		lineHeight: '48px',
	},
	[HeaderVariants.H3]: {
		fontSize: '24px',
		fontWeight: 500,
		lineHeight: '40px',
	},
	[HeaderVariants.H4]: {
		fontSize: '20px',
		fontWeight: 500,
		lineHeight: '32px',
	},
	[HeaderVariants.H5]: {
		fontSize: '16px',
		fontWeight: 500,
		lineHeight: '24px',
	},
	[HeaderVariants.H6]: {
		fontSize: '14px',
		fontWeight: 500,
		lineHeight: '24px',
	},
};

export const DesktopParagraphsValue = {
	[ParagraphVariants.P1]: {
		fontSize: '16px',
		lineHeight: '24px',
	},
	[ParagraphVariants.P2]: {
		fontSize: '14px',
		lineHeight: '20px',
	},
	[ParagraphVariants.P3]: {
		fontSize: '12px',
		lineHeight: '16px',
	},
};

export const DesktopSingleLinesValue = {
	[SingleLineVariants.S1]: {
		fontSize: '16px',
	},
	[SingleLineVariants.S2]: {
		fontSize: '14px',
	},
	[SingleLineVariants.S3]: {
		fontSize: '12px',
	},
};
