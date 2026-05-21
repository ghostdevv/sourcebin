import { get } from '../../src/methods/get.ts';
import assert from 'node:assert';
import { test } from 'node:test';

const key = 'qXO2NVhRc6';

test('check that get method returns expected response', async () => {
	const res = await get({ key });
	assert.ok(res);
});

test('check that get method handles invalid key', async () => {
	assert.rejects(get({ key: '123' }));
});

test('check that fetchContent option works as expected', async () => {
	const res = await get({ key });

	const withOption = await get({
		key,
		fetchContent: false,
	});

	assert.notDeepEqual(res, withOption);
});

test.run();
