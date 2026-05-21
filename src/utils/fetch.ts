import pkg from '../../package.json' with { type: 'json' };

export const USER_AGENT = `sourcebin.js/${pkg.version} (+https://npmx.dev/package/sourcebin)`;
export const API_URL = 'https://sourceb.in/api';
export const CDN_URL = 'https://cdn.sourceb.in';
