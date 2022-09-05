import { resolveLanguageId } from '../../src/utils/languages';
import assert from 'assert';
import { test } from 'uvu';

test('returns expected id', () => {
    const id = resolveLanguageId('JavaScript');
    assert.equal(id, 183);
});

test('is case insensitive', () => {
    const id = resolveLanguageId('jAvAsCrIpT');
    assert.equal(id, 183);
});

test('works with alias', () => {
    const id = resolveLanguageId('js');
    assert.equal(id, 183);
});

test('returns undefined if invalid id', () => {
    assert.throws(() => resolveLanguageId('madeup language'));
});

test("returns id if it's valid number id", () => {
    const id = resolveLanguageId(183);
    assert.equal(id, 183);
});

test("errors if it's a invalid number id", () => {
    assert.throws(() => resolveLanguageId(1908881247891));
});

test.run();
