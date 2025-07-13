import React from 'react';
import { Box } from 'ink';
import { Colors } from '../colors.js';

const PageWrapper = ({ children }) => (
	<Box
		flexDirection="column"
		borderStyle="round"
		borderColor={Colors.Gray}
		padding={1}
	>
		{children}
	</Box>
);

export default PageWrapper;
