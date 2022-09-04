import { get } from '../../src/methods/get';
import assert from 'assert';
import { test } from 'uvu';

const key = 'qXO2NVhRc6';

test('check that get method returns expected response', async () => {
    const res = await get({ key });
    assert.ok(res);
});

test('check that get method handles invalid key', async () => {
    assert.throws(async () => await get({ key: '123' }));
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
