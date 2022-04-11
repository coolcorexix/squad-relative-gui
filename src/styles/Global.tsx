import { createGlobalStyle } from 'styled-components';
import { PancakeTheme } from 'ui-kit/theme';
// eslint-disable-next-line import/no-unresolved

declare module 'styled-components' {
	export interface DefaultTheme extends PancakeTheme {}
}

const GlobalStyle = createGlobalStyle`
	@font-face {
		font-family: 'Londrina Solid';
		font-display: auto;
		src: local('Londrina Solid'),
		url('/fonts/LondrinaSolid.ttf') format('truetype');
		unicode-range: U+000-5FF; /* Latin glyphs */
	}
	* {
		font-family: 'Londrina Solid', sans-serif;
	}
	body {
		background-color: ${({ theme }) => theme.colors.background};

		img {
			height: auto;
			max-width: 100%;
		}

		section {
			width: 100vw !important;
		}
	}

	::-webkit-scrollbar {
		width: 8px;
	}

	::-webkit-scrollbar-track {
		box-shadow: inset 0 0 6px ${({ theme }) => theme.colors.black1000};
	}

	::-webkit-scrollbar-thumb {
		background-color: ${({ theme }) => theme.colors.gray500};
		border-radius: 8px;
	}
`;

export default GlobalStyle;
