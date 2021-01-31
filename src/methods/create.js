const { validateFile, fetch, resolveLanguageId } = require('../util');
const get = require('./get.js');

/**
 * File Data Object
 * @typedef {Object} FileObject
 * @property {string} [name] file name
 * @property {string} content file content
 * @property {number|string} language language or language id
 */

/**
 * Create a bin
 * @typedef CreateMethod
 * @param {FileObject} files bin files
 * @param {Object} [options] bin options
 * @param {string} [options.title] bin title
 * @param {string} [options.description] bin description
 * @return {Promise<SourceBin>}
 */

/**
 * Create a bin
 * @typedef CreateMethod create a bin
 */
module.exports = async (files = [], options = {}) => {
    if (!Array.isArray(files) || files.length == 0)
        throw new SyntaxError('Please give a array of files');

    if (files.length > 1)
        throw new Error(
            'Having multiple files in one bin is only for pro users, authentication is not currently supported via this wrapper',
        );

    for (const file of files) {
        if (file.language == undefined) file.language = 'text';

        const valid = validateFile(file);
        if (valid != true) throw valid;

        file.languageId = resolveLanguageId(file.language);
        delete file.language;
    }

    const res = await fetch('https://sourceb.in/api/bins/', {
        method: 'POST',
        data: {
            files,
            ...options,
        },
    });

    if (!res) throw new Error('There was a error creating your bin');

    const Bin = await get(res.key);
    if (!Bin) throw new Error('There was a error getting your bin');

    return Bin;
};