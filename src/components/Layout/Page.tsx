import React from 'react';
import styled from 'styled-components';
import { DEFAULT_META } from 'config/constants/meta';
import Container from './Container';
import Head from 'next/head';

const StyledPage = styled(Container)`
	// padding-top: 16px;
	// padding-bottom: 16px;
	//
	// ${({ theme }) => theme.mediaQueries.sm} {
	// 	padding-top: 24px;
	// 	padding-bottom: 24px;
	// }
	//
	// ${({ theme }) => theme.mediaQueries.lg} {
	// 	padding-top: 32px;
	// 	padding-bottom: 32px;
	// }
`;

const PageMeta = () => {
	const { title, description, image } = { ...DEFAULT_META };
	const pageTitle = title;

	return (
		<Head>
			<title>{pageTitle}</title>
			<meta property="og:title" content={title} />
			<meta property="og:description" content={description} />
			<meta property="og:image" content={image} />
		</Head>
	);
};

const Page: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
	children,
	...props
}) => {
	return (
		<>
			<PageMeta />
			<StyledPage {...props}>{children}</StyledPage>
		</>
	);
};

export default Page;
