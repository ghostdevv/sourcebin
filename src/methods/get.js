const { SourceBin } = require('../Structures');
const { resolveKey, fetch } = require('../util');

/**
 * Get options
 * @typedef GetOptions options used when getting a bin
 * @property {boolean} [fetchContent=true] whether to fetch content or not
 */

/**
 * Get a bin
 * @typedef GetMethod
 * @param {string} key sourcebin key or url
 * @param {GetOptions} [options]
 * @return {Promise<SourceBin>}
 */

/**
 * Get a bin
 * @method GetMethod get a bin
 */
module.exports = async (key, options = {}) => {
    key = resolveKey(key);
    if (!key) throw new SyntaxError('Expected a valid bin key or url');

    const defaultOptions = {
        fetchContent: true,
    };

    options = Object.assign(defaultOptions, options);

    const binData = await fetch(`https://sourceb.in/api/bins/${key}`);
    if (binData.error)
        throw (
            (console.error('There was a error in fetching bin data'),
            binData.error)
        );

    if (options.fetchContent) {
        for (let i = 0; i < binData.data.files.length; i++) {
            const content = await fetch(
                `https://cdn.sourceb.in/bins/${key}/${i}`,
                {
                    responseType: 'text',
                },
            );

            if (content.error)
                throw (
                    (console.error(
                        'There was a error in fetching bin content for file ' +
                            i,
                    ),
                    content.error)
                );

            binData.data.files[i] = {
                content: content.data,
                ...binData.data.files[i],
            };
        }
    }

    const Bin = new SourceBin(key, binData.data);

    return Bin;
};
