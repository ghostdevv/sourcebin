const { create } = require('../../src/methods');

test('check that create method returns expected response', async () => {
    const res = await create([
        {
            content: 'test',
            language: 'text',
        },
    ]);

    expect(res.files[0].content).toBe('test');
    expect(res.files[0].language.name).toBe('Text');
});

test('check that language defaults to text', async () => {
    const res = await create([
        {
            content: 'test',
        },
    ]);

    expect(res.files[0].content).toBe('test');
    expect(res.files[0].language.name).toBe('Text');
});

test('check that multiple files throws an error', async () => {
    await create([
        {
            content: 'test',
        },
        {
            content: 'test',
        },
    ]).catch((e) => expect(e));
});
