import styled from 'styled-components';
import { layout, LayoutProps, space, SpaceProps } from 'styled-system';
import { LayoutCenter } from 'ui-kit/util';

export const DashboardContainer = styled.div<LayoutProps & SpaceProps>`
	${layout}
	${space}
`;

export const GridLayoutContainer = styled.div`
	${LayoutCenter}
`;

export const PaginationContainer = styled.div`
	${LayoutCenter}
`;