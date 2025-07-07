#!/usr/bin/env node

import { render } from 'ink';
import meow from 'meow';
import React from 'react';
import App from './ui.js';

meow(`
	Usage
		$ rex-tsou
`, { importMeta: import.meta });

const { unmount } = render(<App />);

