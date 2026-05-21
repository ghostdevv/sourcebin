import { File } from '../../src/structures/file.ts';
import { getCdnUrl } from '../../src/utils/url.ts';
import assert from 'node:assert';
import { test } from 'node:test';

test('can create file', () => {
	const file = new File('qXO2NVhRc6', 0, {
		languageId: 222,
		content: 'test',
		name: 'test name',
	});

	assert.ok(file);
});

test('has expected fields', () => {
	const file = new File('qXO2NVhRc6', 0, {
		languageId: 222,
		content: 'test',
		name: 'test name',
	});

	assert.equal(file.content, 'test');
	assert.equal(file.name, 'test name');
	assert.equal(file.languageId, 222);
});

test('has derived fields', () => {
	const file = new File('qXO2NVhRc6', 0, {
		languageId: 222,
		content: 'test',
		name: 'test name',
	});

	assert.equal(file.rawUrl, getCdnUrl('qXO2NVhRc6', 0));
	assert.equal(file.language.name, 'Markdown');
});

test.run();
