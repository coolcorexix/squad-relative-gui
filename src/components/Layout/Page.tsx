import React from 'react';
import styled from 'styled-components';

const PaddingX = 130;
const StyledPage = styled.div`
	min-height: calc(100vh - 64px);
`;

function Page({ children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
	return (
		<>
			<StyledPage {...props}>{children}</StyledPage>
		</>
	);
}

export default Page;
