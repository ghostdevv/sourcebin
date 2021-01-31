const { resolveKey } = require('../../src/util');

// Expects a key to be returned

test('check key is resolved from just a key string', () => {
    const key = resolveKey('qXO2NVhRc6');
    expect(key).toBe('qXO2NVhRc6');
});

test('check key is resolved from full url', () => {
    const key = resolveKey('https://sourceb.in/qXO2NVhRc6');
    expect(key).toBe('qXO2NVhRc6');
});

test('check key is resolved from short url', () => {
    const key = resolveKey('http://srcb.in/qXO2NVhRc6');
    expect(key).toBe('qXO2NVhRc6');
});

// Expects a error to occur

test("check that invalid key doesn't result in resolved key", () => {
    const key = resolveKey('qXO2NVhRc6a');
    expect(key).toBe(undefined);
});

test("check that invalid long url doesn't result in resolved key", () => {
    const key = resolveKey('https://sourceb.in/qXO2NVhRc6a');
    expect(key).toBe(undefined);
});

test("check that invalid short url doesn't result in resolved key", () => {
    const key = resolveKey('http://srcb.in/qXO2NVhRc6a');
    expect(key).toBe(undefined);
});

test("check that invalid url doesn't result in resolved key", () => {
    const key = resolveKey('http://abc.com/qXO2NVhRc6a');
    expect(key).toBe(undefined);
});
