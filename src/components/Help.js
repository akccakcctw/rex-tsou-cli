import React from 'react';
import { Box, Text } from 'ink';
import { Colors } from '../colors.js';

const Help = ({ t }) => (
	<Box
		flexDirection="column"
		marginTop={1}
		borderColor={Colors.Gray}
		borderStyle="round"
		padding={1}
	>
		<Text bold>{t('helpTitle')}</Text>
		<Box><Box width={25}><Text>  /entry</Text></Box><Text>- {t('helpEntry')}</Text></Box>
		<Box><Box width={25}><Text>  /language [en|zhTW]</Text></Box><Text>- {t('helpLang')}</Text></Box>
		<Box><Box width={25}><Text>  /help</Text></Box><Text>- {t('helpHelp')}</Text></Box>
		<Box><Box width={25}><Text>  /about</Text></Box><Text>- {t('helpAbout')}</Text></Box>
		<Box><Box width={25}><Text>  /quit</Text></Box><Text>- {t('helpQuit')}</Text></Box>
	</Box>
);

export default Help;
