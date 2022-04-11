import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { border } from 'styled-system';
import observerOptions from './options';
import Wrapper from './Wrapper';
import { ImageProps } from './types';
import Placeholder from './Placeholder';

const StyledImage = styled.img<{ objectFit?: string }>`
	height: 100%;
	left: 0;
	object-fit: ${({ objectFit }) => objectFit || 'initial'};
	position: absolute;
	top: 0;
	width: 100%;
	${border}
`;

const Image = ({ src, alt, width, height, ...props }: ImageProps) => {
	const imgRef = useRef<HTMLDivElement>(null);
	const [isLoaded, setIsLoaded] = useState(false);

	useEffect(() => {
		let observer: IntersectionObserver;

		if (imgRef.current) {
			observer = new IntersectionObserver((entries) => {
				entries.forEach((entry) => {
					const { isIntersecting } = entry;
					if (isIntersecting) {
						setIsLoaded(true);
						observer.disconnect();
					}
				});
			}, observerOptions);
			observer.observe(imgRef.current);
		}

		return () => {
			if (observer) {
				observer.disconnect();
			}
		};
	}, [src]);

	return (
		<Wrapper ref={imgRef} height={height} width={width} {...props.wrapperProps}>
			{isLoaded ? (
				<StyledImage {...props} src={src} alt={alt} />
			) : (
				<Placeholder />
			)}
		</Wrapper>
	);
};

export default Image;
