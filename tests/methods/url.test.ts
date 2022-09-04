import { url } from '../../src/methods/url';
import assert from 'assert';
import { test } from 'uvu';

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
