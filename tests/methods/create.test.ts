import { create } from '../../src/methods/create';
import assert from 'assert';
import { test } from 'uvu';

test('check that create method returns expected response', async () => {
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
});

test('check that create method can have title and description', async () => {
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
});

test('check that multiple files throws an error', async () => {
    assert.throws(
        async () =>
            await create({
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
});

test.run();
