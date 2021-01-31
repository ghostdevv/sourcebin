const { fetch } = require('../../src/util');

test('checks that fetch get returns a expected response', async () => {
    const res = await fetch('https://httpbin.org/get');
    expect(res);
});

test('checks that fetch post returns a expected response', async () => {
    const testData = Date.now();

    const res = await fetch('https://httpbin.org/post', {
        method: 'POST',
        data: {
            testData,
        },
    });

    const data = JSON.parse(res.data);

    expect(res);
    expect(data.testData).toBe(testData);
});
