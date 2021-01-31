const { validateFile, fetch, resolveLanguageId } = require('../util');
const get = require('./get.js');

module.exports = async (files = [], options = {}) => {
    if (!Array.isArray(files) || files.length == 0)
        throw new SyntaxError('Please give a array of files');

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
