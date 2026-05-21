import { resolveLanguageId } from '../../src/utils/languages.ts';
import { get } from '../../src/methods/get.ts';
import { mockFetch } from '../mock.ts';
import assert from 'node:assert';
import { test } from 'node:test';

test('check that get method returns expected response', async () => {
	const mock = mockFetch({
		'/api/bins/G4fbhFpocD': Response.json({
			hits: 1,
			key: 'G4fbhFpocD',
			files: [{ languageId: resolveLanguageId('text') }],
			created: new Date().toISOString(),
		}),
		'/bins/G4fbhFpocD/0': new Response('test'),
	});

	const res = await get({ key: 'G4fbhFpocD' });

	assert.ok(res);
	mock.dispose();
});

test('check that get method handles invalid key', () => {
	const mock = mockFetch({});
	assert.rejects(get({ key: '123' }));
	mock.dispose();
});

test('check that fetchContent option works as expected', async () => {
	const mock = mockFetch({
		'/api/bins/j3mnvwifjq': Response.json({
			hits: 1,
			key: 'j3mnvwifjq',
			files: [{ languageId: resolveLanguageId('text') }],
			created: new Date().toISOString(),
		}),
		'/bins/j3mnvwifjq/0': new Response('test'),
		'/api/bins/JIFADigO4U': Response.json({
			hits: 1,
			key: 'JIFADigO4U',
			files: [{ languageId: resolveLanguageId('text') }],
			created: new Date().toISOString(),
		}),
	});

	const res = await get({ key: 'j3mnvwifjq' });

	const withOption = await get({
		key: 'JIFADigO4U',
		fetchContent: false,
	});

	assert.notDeepEqual(res, withOption);
	mock.dispose();
});

test.run();
