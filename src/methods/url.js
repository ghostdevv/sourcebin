const { resolveKey } = require('../util');

module.exports = (key) => {
    key = resolveKey(key);
    if (!key) throw new SyntaxError('Expected a valid bin key or url');

    return {
        key,
        url: `https://sourceb.in/${key}`,
        short: `http://srcb.in/${key}`,
    };
};
