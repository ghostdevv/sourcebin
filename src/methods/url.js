const { resolveKey } = require('../util');

/**
 * Url data
 * @typedef UrlData
 * @property {string} key bin key
 * @property {string} url bin url
 * @property {string} short bin short url
 */

/**
 * Get url and short url from key
 * @param {string} key sourcebin key or url
 * @return {UrlData}
 */
module.exports = (key) => {
    key = resolveKey(key);
    if (!key) throw new SyntaxError('Expected a valid bin key or url');

    return {
        key,
        url: `https://sourceb.in/${key}`,
        short: `http://srcb.in/${key}`,
    };
};
