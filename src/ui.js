import React, { useState } from 'react';
import { Text, Box } from 'ink';
import TextInput from 'ink-text-input';
import BigText from 'ink-big-text';
import Gradient from 'ink-gradient';
import SelectInput from 'ink-select-input';
import open from 'open';

const App = () => {
	const [language, setLanguage] = useState('en');
	const [command, setCommand] = useState('');
	const [view, setView] = useState('main'); // main or entry
	const [showHelp, setShowHelp] = useState(false);

	const handleSubmit = () => {
		setShowHelp(false); // Hide help by default on new command

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
		}
		setCommand('');
	};

	const handleSelect = item => {
		if (item.url) {
			open(item.url);
		} else if (item.action) {
			item.action();
		}
	};

	const messages = {
		en: {
			title: 'Rex Tsou',
			welcome: 'Welcome! Type /help for a list of commands.',
			back: 'Back',
			helpTitle: 'Available Commands:',
			helpEntry: 'Show options menu',
      helpLang: 'Switch language',
      helpHelp: 'Show this help message',
      helpQuit: 'Exit the application',
			website: 'Website',
			blog: 'Blog',
			github: 'GitHub',
		},
		zhTW: {
			title: 'Rex Tsou',
			welcome: '歡迎！輸入 /help 查看指令列表。',
			back: '返回',
			helpTitle: '可用指令：',
      helpEntry: '顯示選項選單',
      helpLang: '切換語言',
      helpHelp: '顯示此幫助訊息',
      helpQuit: '離開應用程式',
			website: '個人網站',
			blog: '技術部落格',
			github: 'GitHub',
		},
	};

	const currentMessages = language === 'zh-TW' ? messages.zhTW : messages.en;

	const entryItems = [
		{ key: 'website', label: currentMessages.website, url: 'https://rex-tsou.com' },
		{ key: 'blog', label: currentMessages.blog, url: 'https://blog.rex-tsou.com' },
		{ key: 'github', label: currentMessages.github, url: 'https://github.com/akccakcctw' },
		{ key: 'separator', label: '----------' },
		{ key: 'back', label: currentMessages.back, action: () => setView('main') },
	];

	if (view === 'entry') {
		return (
			<Box flexDirection="column" padding={2}>
				<SelectInput items={entryItems} onSelect={handleSelect} />
			</Box>
		);
	}

	return (
		<Box flexDirection="column" padding={2}>
			<Gradient name="pastel">
				<BigText text={currentMessages.title} />
			</Gradient>

			{showHelp ? (
				<Box flexDirection="column" marginTop={1}>
					<Text bold>{currentMessages.helpTitle}</Text>
					<Box><Box width={25}><Text>  /entry</Text></Box><Text>- {currentMessages.helpEntry}</Text></Box>
					<Box><Box width={25}><Text>  /language [en|zh-TW]</Text></Box><Text>- {currentMessages.helpLang}</Text></Box>
					<Box><Box width={25}><Text>  /help</Text></Box><Text>- {currentMessages.helpHelp}</Text></Box>
					<Box><Box width={25}><Text>  /quit</Text></Box><Text>- {currentMessages.helpQuit}</Text></Box>
				</Box>
			) : (
				<Text>{currentMessages.welcome}</Text>
			)}

			<Box marginTop={1}>
				<Text>&gt; </Text>
				<TextInput
					value={command}
					onChange={setCommand}
					onSubmit={handleSubmit}
				/>
			</Box>
		</Box>
	);
};

export default App;