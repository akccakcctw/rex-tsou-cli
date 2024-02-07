#!/usr/bin/env node

import { render } from 'ink';
import React from 'react';
import nodeBanner from 'node-banner';
import { List } from './ui.js';

(async () => {
	await nodeBanner(
		'Rex Tsou',
		'Hello World',
	);

	render(
		<>
		<List />
		</>
	);
})();
