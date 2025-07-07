#!/usr/bin/env node

import { render } from 'ink';
import meow from 'meow';
import React from 'react';
import { Options, Banner } from './ui.js';

meow(`
	Usage
		$ rex-tsou
`, { importMeta: import.meta });

(async () => {
	render(
		<>
		<Banner />
		<Options />
		</>
	);
})();
