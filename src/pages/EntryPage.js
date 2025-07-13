import React from 'react';
import { Box } from 'ink';
import SelectInput from 'ink-select-input';
import open from 'open';

const EntryPage = ({ t, setView }) => {
	const handleSelect = item => {
		if (item.url) {
			open(item.url);
		} else if (item.action) {
			item.action();
		}
	};

	const entryItems = [
		{ key: 'website', label: t('website'), url: 'https://rex-tsou.com' },
		{ key: 'blog', label: t('blog'), url: 'https://blog.rex-tsou.com' },
		{ key: 'github', label: t('github'), url: 'https://github.com/akccakcctw' },
		{ key: 'separator', label: '----------' },
		{ key: 'back', label: t('back'), action: () => setView('main') },
	];

	return (
		<Box flexDirection="column" padding={2}>
			<SelectInput items={entryItems} onSelect={handleSelect} />
		</Box>
	);
};

export default EntryPage;
