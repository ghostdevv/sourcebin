const { validateFile } = require('../../src/util');

test('check that validateFile returns true with name', () => {
    const file = {
        name: 'test',
        content: 'test',
        language: 'javascript',
    };

    const valid = validateFile(file);

    expect(valid).toEqual(true);
});

test('check that validateFile returns true without name', () => {
    const file = {
        content: 'test',
        language: 'javascript',
    };

    const valid = validateFile(file);

    expect(valid).toEqual(true);
});

test('check that validateFile returns error with invalid content', () => {
    const file = {
        content: 123,
        language: 'javascript',
    };

    const valid = validateFile(file);

    expect(valid).not.toEqual(true);
});

test('check that validateFile returns error with invalid language', () => {
    const file = {
        content: 'test',
        language: 1487182949012479,
    };

    const valid = validateFile(file);

    expect(valid).not.toEqual(true);
});

test('check that validateFile returns error with no content', () => {
    const file = {
        language: 'javascript',
    };

    const valid = validateFile(file);

    expect(valid).not.toEqual(true);
});
