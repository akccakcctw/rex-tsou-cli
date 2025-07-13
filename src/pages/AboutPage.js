import React from 'react';
import { Box, Text } from 'ink';
import SelectInput from 'ink-select-input';
import PageWrapper from '../components/PageWrapper.js';

const AboutPage = ({ t, setView }) => {
	const handleSelect = item => {
		if (item.action) {
			item.action();
		}
	};

	return (
		<PageWrapper>
			<Text bold>{t('aboutTitle')}</Text>
			<Text>{t('aboutIntro')}</Text>
			<Box paddingTop={1}>
				<Text bold>{t('aboutWorkExperienceTitle')}</Text>
			</Box>
			<Text>{t('aboutWorkExperienceContent')}</Text>
			<Box marginTop={1}>
				<SelectInput items={[{ key: 'back', label: t('back'), action: () => setView('main') }]} onSelect={handleSelect} />
			</Box>
		</PageWrapper>
	);
};

export default AboutPage;
