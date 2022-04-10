import React from 'react';
import Svg from '../Svg';
import { SvgProps } from '../types';

function GreenEggIcon(props: SvgProps) {
	return (
		<Svg
			width="72"
			height="82"
			viewBox="0 0 72 82"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				d="M72 41C72 74.6126 55.8823 82 36 82C16.1178 82 7.01964e-06 74.2432 7.01964e-06 41C7.01964e-06 18.3563 16.1178 0 36 0C55.8823 0 72 18.3563 72 41Z"
				fill="#0CEFA7"
			/>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M68.0063 22.466L66.8912 24.0881L63.7929 46.292L55.7583 42.2747L49.5466 55.5855L27.2526 49.2158L19.7735 66.0438L1.29021 56.2364C0.94323 54.4788 0.662938 52.6132 0.453369 50.6336L17.5936 59.7284L24.6968 43.7463L47.061 50.136L53.6088 36.1051L60.1565 39.3789L62.5266 22.3929L65.6203 17.8931C66.4972 19.3522 67.2949 20.8793 68.0063 22.466Z"
				fill="black"
				fillOpacity="0.1"
			/>
		</Svg>
	);
}

export default GreenEggIcon;
