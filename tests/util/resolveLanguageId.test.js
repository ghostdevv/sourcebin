const { resolveLanguageId } = require('../../src/util');

test('check that resolveLanguageId returns expected id', () => {
    const id = resolveLanguageId('JavaScript');
    expect(id).toBe(183);
});

test('check that resolveLanguageId is case insensitive', () => {
    const id = resolveLanguageId('jAvAsCrIpT');
    expect(id).toBe(183);
});

test('check that resolveLanguageId returns a error if invalid id', () => {
    const id = resolveLanguageId('madeup language');
    expect(id).toBe(undefined);
});

test("check that resolveLanguageId returns id if it's valid id", () => {
    const id = resolveLanguageId(183);
    expect(id).toBe(183);
});

test("check that resolveLanguageId returns undefined if it's a invalid id", () => {
    const id = resolveLanguageId(1908881247891);
    expect(id).toBe(undefined);
});
