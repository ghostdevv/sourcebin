import { File } from '../../src/structures/File';
import { Bin } from '../../src/structures/Bin';
import assert from 'assert';
import { test } from 'uvu';

test('can create bin', () => {
    const bin = new Bin({
        key: 'qXO2NVhRc6',
        created: '2021-01-31T00:34:35.635Z',
        hits: 362,
        title: 'test title',
        description: 'test description',
        files: [
            {
                languageId: 222,
                content: 'test',
                name: 'test name',
            },
        ],
    });

    assert.ok(bin);
});

test('has expected fields', () => {
    const bin = new Bin({
        key: 'qXO2NVhRc6',
        created: '2021-01-31T00:34:35.635Z',
        hits: 362,
        title: 'test title',
        description: 'test description',
        files: [
            {
                languageId: 222,
                content: 'test',
                name: 'test name',
            },
        ],
    });

    assert.equal(bin.key, 'qXO2NVhRc6');
    assert.equal(bin.created.toISOString(), '2021-01-31T00:34:35.635Z');
    assert.equal(bin.views, 362);
    assert.equal(bin.title, 'test title');
    assert.equal(bin.description, 'test description');
});

test('has files', () => {
    const bin = new Bin({
        key: 'qXO2NVhRc6',
        created: '2021-01-31T00:34:35.635Z',
        hits: 362,
        title: 'test title',
        description: 'test description',
        files: [
            {
                languageId: 222,
                content: 'test',
                name: 'test name',
            },
        ],
    });

    assert.deepEqual(
        bin.files[0],
        new File('qXO2NVhRc6', 0, {
            languageId: 222,
            content: 'test',
            name: 'test name',
        }),
    );
});

test.run();
