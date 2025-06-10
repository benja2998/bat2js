// -- START HEADER --

// Copyright (c) benja2998. You may redistribute under the terms of the GPL-3.0-or-later.
// bat2js is a Batch to JavaScript compiler.

// -- END HEADER --

// -- START IMPORTS --

const fs = require('fs');
const path = require('path');
const { tokenize } = require('../dist/index.js');
const { describe, it, expect } = require('@jest/globals');

// -- END IMPORTS --

describe('tokenize()', () => {
	it('should return non-empty, trimmed lines from test.bat', () => {
		const filePath = path.join(__dirname, 'test.bat');

		expect(fs.existsSync(filePath)).toBe(true);

		const fileContents = fs.readFileSync(filePath, 'utf8');
		const tokenizedContents = tokenize(fileContents);

		console.log(tokenizedContents);

		expect(Array.isArray(tokenizedContents)).toBe(true);
		expect(typeof tokenizedContents[0]).toBe('string');
	});
});