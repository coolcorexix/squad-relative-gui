import React from 'react';
import { Box, BoxProps } from '@pancakeswap/uikit';

const Container: React.FC<BoxProps> = ({ children, ...props }) => (
	<Box {...props}>{children}</Box>
);

export default Container;
