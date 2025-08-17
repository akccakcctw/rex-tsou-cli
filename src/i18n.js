const messages = {
	en: {
		title: 'Rex Tsou',
		welcome: 'Welcome! Type /help for a list of commands.',
		back: 'Back',
		helpTitle: 'Available Commands:',
		helpEntry: 'Show options menu',
		helpLang: 'Switch language',
		helpHelp: 'Show this help message',
		helpAbout: 'Show about message',
		helpQuit: 'Exit the application',
		website: 'Website',
		blog: 'Blog',
		github: 'GitHub',
		aboutTitle: 'About Me',
		aboutIntro: `
Graduated from the Chinese Literature Department at National Chengchi University. I enjoy reading and writing, have won a few small literary awards, and have a strong opinion on the quality and form of poetry.

I previously worked as the content editor for the "udn.com" website and as a front-end engineer at "Travel Alliance Information". Currently, I am the leader of the front-end architecture team at "KKday", specializing in web UI presentation and interaction technologies, and pursuing a friendly and smooth user experience with my outstanding team members.

I like to challenge the unknown and break out of the box, with a passion for open-source and decentralization concepts. In my spare time, I enjoy traveling, cultural activities, hiking, rock climbing, and playing computer games.
`,
		aboutWorkExperienceTitle: 'Work Experience',
		aboutWorkExperienceContent: `
KKday (Dec 2017 - Present)
- Front-End Team Lead (Jul 2024 - Present)
- Front-End Engineer (Dec 2017 - Jul 2024)

Lemon info. Tech. Co., Ltd (Apr 2016 - Jun 2017)
- Front-End Developer
- Front-end web development, CMS backend development

udn.com (Oct 2014 - Dec 2015)
Online Content Editor, Project Manager
- Product manager, content planner, interviewer, writer and editor
`,
	},
	zhTW: {
		title: 'Rex Tsou',
		welcome: '歡迎！輸入 /help 查看指令列表。',
		back: '返回',
		helpTitle: '可用指令：',
		helpEntry: '顯示選項選單',
		helpLang: '切換語言',
		helpHelp: '顯示此幫助訊息',
		helpAbout: '顯示關於訊息',
		helpQuit: '離開應用程式',
		website: '個人網站',
		blog: '技術部落格',
		github: 'GitHub',
		aboutTitle: '關於我',
		aboutIntro: `
政大中文系畢業，喜歡閱讀與寫作並得過幾個小小的文學獎，對詩的好壞與形式有強烈的偏執。

曾任「udn 讀.書.人」網站內容主編，「旅盟資訊」前端工程師。現爲「KKday」前端架構組組長，專研網頁畫面呈現及互動技術，與優秀的團隊成員一同追求友善流暢的使用者體驗。

喜歡挑戰未知、突破框架，熱愛開源與去中心化理念。空閒時間喜歡旅遊、藝文活動、登山、攀岩、玩電腦遊戲。
`,
		aboutWorkExperienceTitle: '工作經歷',
		aboutWorkExperienceContent: `
KKday（2017 年 12 月 - 至今）
- 前端架構組組長（2024 年 7 月 - 至今）
- 前端工程師（2017 年 12 月 - 2024 年 7 月）

旅盟資訊（2016 年 4 月 - 2017 年 6 月）
- 前端網頁開發、CMS後台開發

聯合線上 udn.com（2014 年 10 月 - 2015 年 12 月）
- 產品經理、內容企劃、採訪、撰稿與編輯
`,
	},
};

export const getT = (language) => (key) => {
	const langMessages = messages[language] || messages.en;
	return langMessages[key];
};
''
