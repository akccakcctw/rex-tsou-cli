import React from 'react';
import { Box, Text } from 'ink';
import SelectInput from 'ink-select-input';

const AboutPage = ({ t, setView }) => {
	const handleSelect = item => {
		if (item.action) {
			item.action();
		}
	};

	return (
		<Box flexDirection="column" padding={2}>
			<Box flexDirection="column" paddingBottom={1}>
				<Text bold>{t('aboutTitle')}</Text>
				<Text>{t('aboutIntro')}</Text>
				<Box paddingTop={1}>
					<Text bold>{t('aboutWorkExperienceTitle')}</Text>
				</Box>
				<Text>{t('aboutWorkExperienceContent')}</Text>
			</Box>
			<SelectInput items={[{ key: 'back', label: t('back'), action: () => setView('main') }]} onSelect={handleSelect} />
		</Box>
	);
};

export default AboutPage;
