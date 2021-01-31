const { url } = require('../../src/methods');

const key = 'qXO2NVhRc6';

test('check url method works as expected', () => {
    const data = url(key);

    expect(data).toEqual({
        key,
        url: `https://sourceb.in/${key}`,
        short: `http://srcb.in/${key}`,
    });
});
