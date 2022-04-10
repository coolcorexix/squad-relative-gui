import styled from 'styled-components';
import { flexbox } from 'styled-system';
import Box from './Box';
import { FlexProps } from './types';

const BoxContainer = styled(Box)<FlexProps>`
	max-width: 1128px;
	width: 100%;
	${flexbox};
`;

export default BoxContainer;
