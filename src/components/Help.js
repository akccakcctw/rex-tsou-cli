import React from 'react';
import { Box, Text } from 'ink';
import { Colors } from '../colors.js';

const Help = ({ currentMessages }) => (
	<Box
		flexDirection="column"
		marginTop={1}
		borderColor={Colors.Gray}
		borderStyle="round"
		padding={1}
	>
		<Text bold>{currentMessages.helpTitle}</Text>
		<Box><Box width={25}><Text>  /entry</Text></Box><Text>- {currentMessages.helpEntry}</Text></Box>
		<Box><Box width={25}><Text>  /language [en|zh-TW]</Text></Box><Text>- {currentMessages.helpLang}</Text></Box>
		<Box><Box width={25}><Text>  /help</Text></Box><Text>- {currentMessages.helpHelp}</Text></Box>
		<Box><Box width={25}><Text>  /about</Text></Box><Text>- {currentMessages.helpAbout}</Text></Box>
		<Box><Box width={25}><Text>  /quit</Text></Box><Text>- {currentMessages.helpQuit}</Text></Box>
	</Box>
);

export default Help;
