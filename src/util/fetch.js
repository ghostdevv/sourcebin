const { version } = require('../../package.json');
const got = require('got');

module.exports = async (url, options = {}) => {
    return got(url, {
        json: options.data,
        responseType: 'json',

        ...options,

        headers: {
            ...options.headers,
            'User-Agent': `Sourcebin/${version} https://www.npmjs.com/package/sourcebin`,
        },
    })
        .then((res) => res.body)
        .catch((res) => undefined);
};
