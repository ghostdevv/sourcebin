const resolveLanguageId = require('./resolveLanguageId.js');

module.exports = ({ name, content, language } = {}) => {
    if (name && typeof name != 'string')
        return new TypeError(
            `Expected type string for file.name, found ${typeof name}`,
        );

    if (!content || typeof content != 'string' || content.trim() == '')
        return new TypeError('Expected to recieve a valid item for content');

    if (!resolveLanguageId(language))
        return new SyntaxError('Invalid language given');

    return true;
};
