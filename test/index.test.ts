// -- START HEADER --

// Copyright (c) benja2998. You may redistribute under the terms of the GPL-3.0-or-later.
// bat2js is a Batch to JavaScript compiler.

// -- END HEADER --

// -- START IMPORTS --

const fs = require('fs');
const path = require('path');
const { tokenize, tokenType, tokens_to_javascript, isPercentVariable, token } = require('../dist/index.js');
const { describe, it, expect } = require('@jest/globals');

// -- END IMPORTS --

describe('tokenize()', () => {
	it('should return an array', () => {
		const filePath = path.join(__dirname, 'test.bat');

		expect(fs.existsSync(filePath)).toBe(true);

		const fileContents = fs.readFileSync(filePath, 'utf8');
		const tokenizedContents = tokenize(fileContents);

		console.log(tokenizedContents);

		expect(Array.isArray(tokenizedContents)).toBe(true);
		expect(typeof tokenizedContents[0]).toBe('object');
	});
});

describe('tokens_to_javascript()', () => {
	it('should return a string', () => {
		const filePath = path.join(__dirname, 'test.bat');

		expect(fs.existsSync(filePath)).toBe(true);

		const fileContents = fs.readFileSync(filePath, 'utf8');

		const compiledContents = tokens_to_javascript(tokenize(fileContents), {});

		console.log(compiledContents);

		expect(typeof compiledContents).toBe('string');
	});
});

describe('isPercentVariable()', () => {
	it('should return a boolean', () => {
		expect(isPercentVariable('%hello%')).toBe(true);
		expect(isPercentVariable('hello')).toBe(false);
		expect(isPercentVariable('hello%*%')).toBe(false);
		expect(isPercentVariable('%*%hello')).toBe(false);
	});
});
