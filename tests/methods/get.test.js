const { get } = require('../../src/methods');

const key = 'qXO2NVhRc6';

test('check that get method returns expected response', async () => {
    const res = await get(key);
    expect(res);
});

test('check that fetchContent option works as expected', async () => {
    const res = await get(key);

    const withOption = await get(key, {
        fetchContent: false,
    });

    expect(res).not.toEqual(withOption);
});
