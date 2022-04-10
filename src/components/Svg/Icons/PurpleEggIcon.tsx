import React from 'react';
import Svg from '../Svg';
import { SvgProps } from '../types';

function PurpleEggIcon(props: SvgProps) {
	return (
		<Svg
			width="48"
			height="55"
			viewBox="0 0 48 55"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				d="M48 27.3333C48 49.7417 37.2548 54.6667 24 54.6667C10.7452 54.6667 4.67976e-06 49.4955 4.67976e-06 27.3333C4.67976e-06 12.2375 10.7452 0 24 0C37.2548 0 48 12.2375 48 27.3333Z"
				fill="#E903AE"
			/>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M45.3376 14.9769L44.5941 16.0584L42.5286 30.861L37.1722 28.1828L33.0311 37.0567L18.1684 32.8102L13.1823 44.0288L0.860166 37.4906C0.628837 36.3189 0.441967 35.0751 0.302246 33.7554L11.729 39.8186L16.4645 29.1638L31.374 33.4237L35.7391 24.0697L40.1043 26.2523L41.6844 14.9283L43.7469 11.9282C44.3315 12.901 44.8633 13.919 45.3376 14.9769Z"
				fill="black"
				fillOpacity="0.1"
			/>
		</Svg>
	);
}

export default PurpleEggIcon;
