import React, { useState, useRef } from 'react';
import { Text, Box, useInput } from 'ink';
import TextInput from 'ink-text-input';
import BigText from 'ink-big-text';
import Gradient from 'ink-gradient';
import { Colors } from './colors.js';
import { messages } from './messages.js';
import EntryPage from './pages/EntryPage.js';
import AboutPage from './pages/AboutPage.js';
import Help from './components/Help.js';

const App = () => {
	const [language, setLanguage] = useState('en');
	const [command, setCommand] = useState('');
	const [view, setView] = useState('main'); // main, entry, or about
	const [showHelp, setShowHelp] = useState(false);
	const autocompleteIndex = useRef(0);

	const availableCommands = [
		'/language',
		'/entry',
		'/quit',
		'/help',
		'/about',
	];

	useInput((input, key) => {
		if (key.tab) {
			let filteredCommands = availableCommands.filter(cmd =>
				cmd.startsWith(command)
			);

			if (filteredCommands.length === 0) {
				filteredCommands = availableCommands; // If no match, cycle all commands
			}

			// Cycle through matching commands
			autocompleteIndex.current = (autocompleteIndex.current + 1) % filteredCommands.length;
			setCommand(filteredCommands[autocompleteIndex.current]);
		}
	});

	const handleSubmit = () => {
		setShowHelp(false); // Hide help by default on new command
		autocompleteIndex.current = 0; // Reset autocomplete index on submit

		if (command.startsWith('/language')) {
			const newLang = command.split(' ')[1];
			if (newLang === 'en' || newLang === 'zh-TW') {
				setLanguage(newLang);
			}
		} else if (command === '/entry') {
			setView('entry');
		} else if (command === '/quit') {
			process.exit(0);
		} else if (command === '/help') {
			setShowHelp(true);
		} else if (command === '/about') {
			setView('about');
		}
		setCommand('');
	};

	const currentMessages = language === 'zh-TW' ? messages.zhTW : messages.en;

	if (view === 'entry') {
		return <EntryPage currentMessages={currentMessages} setView={setView} />;
	}

	if (view === 'about') {
		return <AboutPage currentMessages={currentMessages} setView={setView} />;
	}

	return (
		<Box flexDirection="column" padding={2}>
			<Gradient name="pastel">
				<BigText text={currentMessages.title} />
			</Gradient>
			<Text>Copyright © 2025 Rex Tsou. All Rights Reserved.</Text>

			{showHelp ? (
				<Help currentMessages={currentMessages} />
			) : (
				<Box flexDirection="column" marginTop={3}>
					<Text marginTop={3}>{currentMessages.welcome}</Text>
				</Box>
			)}

			<Box
				marginTop={1}
				borderStyle="round"
				borderColor={Colors.LightBlue}
				paddingX={1}
				paddingY={0}>
				<Text>&gt; </Text>
				<TextInput
					key={command}
					value={command}
					onChange={setCommand}
					onSubmit={handleSubmit}
					placeholder="  Type a command... (<Tab> to autocomplete)"
				/>
			</Box>
		</Box>
	);
};

export default App;