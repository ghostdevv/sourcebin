import { resolveLanguageId } from '../../src/utils/languages.ts';
import { create } from '../../src/methods/create.ts';
import { mockFetch } from '../mock.ts';
import assert from 'node:assert';
import { test } from 'node:test';

test('check that create method returns expected response', async () => {
	const mock = mockFetch({
		'/api/bins': Response.json({ key: '3kQNnpL3jg' }),
		'/api/bins/3kQNnpL3jg': Response.json({
			hits: 1,
			key: '3kQNnpL3jg',
			files: [{ languageId: resolveLanguageId('text') }],
			created: new Date().toISOString(),
		}),
		'/bins/3kQNnpL3jg/0': new Response('test'),
	});

	const res = await create({
		files: [
			{
				content: 'test',
				language: 'text',
			},
		],
	});

	assert.equal(res.files[0].content, 'test');
	assert.equal(res.files[0].language.name, 'Text');
	mock.dispose();
});

test('check that create method can have title and description', async () => {
	const mock = mockFetch({
		'/api/bins': Response.json({ key: 'ImB5gsDT6W' }),
		'/api/bins/ImB5gsDT6W': Response.json({
			hits: 1,
			key: 'ImB5gsDT6W',
			title: 'Test',
			description: 'A test desc',
			files: [{ languageId: resolveLanguageId('text') }],
			created: new Date().toISOString(),
		}),
		'/bins/ImB5gsDT6W/0': new Response('test'),
	});

	const res = await create({
		title: 'Test',
		description: 'A test desc',
		files: [
			{
				content: 'test',
				language: 'text',
			},
		],
	});

	assert.equal(res.title, 'Test');
	assert.equal(res.description, 'A test desc');
	mock.dispose();
});

test('check that multiple files throws an error', () => {
	const mock = mockFetch({});

	assert.rejects(
		create({
			files: [
				{
					content: 'test',
				},
				{
					content: 'test',
				},
			],
		}),
	);

	mock.dispose();
});

test.run();
