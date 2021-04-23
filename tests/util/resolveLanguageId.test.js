const { resolveLanguageId } = require('../../src/util');

test('returns expected id', () => {
    const id = resolveLanguageId('JavaScript');
    expect(id).toBe(183);
});

test('is case insensitive', () => {
    const id = resolveLanguageId('jAvAsCrIpT');
    expect(id).toBe(183);
});

test('works with alias', () => {
    const id = resolveLanguageId('js');
    expect(id).toBe(183);
});

test('returns undefined if invalid id', () => {
    const id = resolveLanguageId('madeup language');
    expect(id).toBe(undefined);
});

test("returns id if it's valid number id", () => {
    const id = resolveLanguageId(183);
    expect(id).toBe(183);
});

test("returns undefined if it's a invalid number id", () => {
    const id = resolveLanguageId(1908881247891);
    expect(id).toBe(undefined);
});
