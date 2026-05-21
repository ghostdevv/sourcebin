import { url } from '../../src/methods/url.ts';
import assert from 'node:assert';
import { test } from 'node:test';

test('check url method works as expected', () => {
	const key = 'qXO2NVhRc6';
	const data = url(key);

	assert.deepEqual(data, {
		key,
		url: `https://sourceb.in/${key}`,
		short: `http://srcb.in/${key}`,
	});
});

test.run();
