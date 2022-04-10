export type Breakpoints = string[];

export type MediaQueries = {
	xs: string;
	sm: string;
	md: string;
	lg: string;
	xl: string;
	xxl: string;
	nav: string;
};

export type Spacing = number[];

export type Radii = {
	small: string;
	default: string;
	card: string;
	circle: string;
};

export type Shadows = {
	level1: string;
	active: string;
	success: string;
	warning: string;
	focus: string;
	inset: string;
};

export type Gradients = {
	bubblegum: string;
	inverseBubblegum: string;
	cardHeader: string;
	blue: string;
	violet: string;
	violetAlt: string;
	gold: string;
};

export interface Colors
	extends InProgressColor,
		BackgroundColors,
		PrimaryColors {
	primary: string;
	primaryBright: string;
	primaryDark: string;
	secondary: string;
	tertiary: string;
	success: string;
	failure: string;
	warning: string;
	cardBorder: string;
	contrast: string;
	dropdown: string;
	dropdownDeep: string;
	invertedContrast: string;
	input: string;
	inputSecondary: string;
	background: string;
	backgroundDisabled: string;
	backgroundAlt: string;
	text: string;
	textDisabled: string;
	textSubtle: string;
	disabled: string;

	// Gradients
	gradients: Gradients;

	// Additional colors
	binance: string;
	overlay: string;
	gold: string;
	silver: string;
	bronze: string;
}

export interface InProgressColor {
	//! In progress colors
	blue900: string;
	blue500: string;
	blue300: string;
	white: string;
	gray300: string;
	gray500: string;
	black: string;
	black500: string;
	black700: string;
	black900: string;
	black1000: string;
}

export type BackgroundColorsMixed = {
	dark: BackgroundColors;
	light: BackgroundColors;
};

export type BackgroundColors = {
	backgroundNavbar: string;
};

export type PrimaryColorsMixed = {
	dark: PrimaryColors;
	light: PrimaryColors;
};

export type PrimaryColors = {
	primaryGreen: string;
	primaryGreenDarker: string;
	primaryPurple: string;
	primaryPurpleDarker: string;
};

export type TextColorsMixed = {
	dark: TextColors;
	light: TextColors;
};

export type TextColors = {
	textBody: string;
	textHolder: string;
	textTitle: string;
};

export type ZIndices = {
	dropdown: number;
	modal: number;
	navbar: number;
};
