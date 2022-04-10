import { createGlobalStyle } from 'styled-components';

const ResetCSS = createGlobalStyle`
	* {
		font-family: 'Londrina Solid', sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}
`;

export default ResetCSS;
