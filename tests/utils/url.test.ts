import { resolveKey, getCdnUrl } from '../../src/utils/url';
import assert from 'assert';
import { test } from 'uvu';

test('check cdn url is correct', () => {
    const url = getCdnUrl('qXO2NVhRc6', 1);
    assert.equal(url, 'https://cdn.sourceb.in/bins/qXO2NVhRc6/1');
});

test('check key is resolved from just a key string', () => {
    const key = resolveKey('qXO2NVhRc6');
    assert.equal(key, 'qXO2NVhRc6');
});

test('check key is resolved from full url', () => {
    const key = resolveKey('https://sourceb.in/qXO2NVhRc6');
    assert.equal(key, 'qXO2NVhRc6');
});

test('check key is resolved from short url', () => {
    const key = resolveKey('http://srcb.in/qXO2NVhRc6');
    assert.equal(key, 'qXO2NVhRc6');
});

test("check that invalid key doesn't result in resolved key", () => {
    const key = resolveKey('qXO2NVhRc6a');
    assert.equal(key, undefined);
});

test("check that invalid long url doesn't result in resolved key", () => {
    const key = resolveKey('https://sourceb.in/qXO2NVhRc6a');
    assert.equal(key, undefined);
});

test("check that invalid short url doesn't result in resolved key", () => {
    const key = resolveKey('http://srcb.in/qXO2NVhRc6a');
    assert.equal(key, undefined);
});

test("check that invalid url doesn't result in resolved key", () => {
    const key = resolveKey('http://abc.com/qXO2NVhRc6a');
    assert.equal(key, undefined);
});

test.run();
