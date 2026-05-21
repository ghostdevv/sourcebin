import pkg from '../../package.json' with { type: 'json' };

/**
 * HTTP User-Agent header value used by this library when making API requests.
 */
export const USER_AGENT = `sourcebin.js/${pkg.version} (+https://npmx.dev/package/sourcebin)`;

/**
 * Base URL of the Sourcebin API.
 */
export const API_URL = 'https://sourceb.in/api';

/**
 * Base URL of the Sourcebin CDN for serving bin assets.
 */
export const CDN_URL = 'https://cdn.sourceb.in';
