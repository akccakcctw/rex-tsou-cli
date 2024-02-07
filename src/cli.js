#!/usr/bin/env node

import { render } from 'ink';
import meow from 'meow';
import React from 'react';
import nodeBanner from 'node-banner';
import { Options } from './ui.js';

meow(`
	Usage
		$ rex-tsou
`, { importMeta: import.meta });

(async () => {
	await nodeBanner(
		'Rex Tsou',
		'Hello World',
	);

	render(
		<>
		<Options />
		</>
	);
})();
