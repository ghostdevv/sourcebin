import { resolveKey } from '../utils/url.ts';

/**
 * Generates the full and short URLs for a sourcebin from its key or URL.
 *
 * @param keyOrUrl - A raw ten-character key or a full sourcebin URL.
 * @returns An object containing the key, the full URL, and the shortened URL.
 *
 * @throws Error when the provided string does not contain a valid key.
 *
 * @example
 * ```js
 * import { url } from 'sourcebin';
 *
 * const urls = url('abc123');
 * console.log(urls.url);    // 'https://sourceb.in/abc123'
 * console.log(urls.short);  // 'http://srcb.in/abc123'
 * ```
 *
 * @example
 * ```js
 * import { url } from 'sourcebin';
 *
 * const urls = url('https://sourceb.in/bins/abc123def4');
 * console.log(urls.key);    // 'abc123def4'
 * ```
 */
export const url = (keyOrUrl: string) => {
	const key = resolveKey(keyOrUrl);

	if (!key)
		throw new Error(
			'Invalid item given to url, must be a valid sourcebin url or bin key',
		);

	return {
		key,
		url: `https://sourceb.in/${key}`,
		short: `http://srcb.in/${key}`,
	};
};
