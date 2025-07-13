import React from 'react';
import { Box, Text } from 'ink';
import SelectInput from 'ink-select-input';

const AboutPage = ({ currentMessages, setView }) => {
	const handleSelect = item => {
		if (item.action) {
			item.action();
		}
	};

	return (
		<Box flexDirection="column" padding={2}>
			<Box flexDirection="column" paddingBottom={1}>
				<Text bold>{currentMessages.aboutTitle}</Text>
				<Text>{currentMessages.aboutContent}</Text>
			</Box>
			<SelectInput items={[{ key: 'back', label: currentMessages.back, action: () => setView('main') }]} onSelect={handleSelect} />
		</Box>
	);
};

export default AboutPage;
