import React, { useState, useEffect } from 'react';
import SelectInput from 'ink-select-input';
import open from 'open';
import { Text, Box } from 'ink';

function handleSelect(item) {
	if(item.url) {
		open(item.url);
	} else if(item.action) {
		item.action();
	}
}

function createList(items) {
	return items.map(item => ({
		...item,
		key: item.label || item.url,
	}));
};

const listItems = createList([
	{
		label: 'Website',
		url: 'https://rex-tsou.com',
	},
	{
		label: 'Blog',
		url: 'https://blog.rex-tsou.com',
	},
	{
		label: 'Code',
		url: 'https://github.com/akccakcctw',
	},
]);

const Counter = () => {
	const [counter, setCounter] = useState(0);

	useEffect(() => {
		const timer = setInterval(() => {
			setCounter(c => c++);
		}, 100);

		return () => {
			clearInterval(timer);
		};
	}, []);

	return (
		<Text color="green">{counter} test</Text>
	);
};

const List = () => (
	<>
		<Box flexDirection="column">
			<Box marginBottom={1} />
			<SelectInput items={listItems} onSelect={handleSelect} />
		</Box>
	</>
);

export {
	Counter,
	List,
};

export default List;
