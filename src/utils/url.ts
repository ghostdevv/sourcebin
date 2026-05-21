import { CDN_URL } from './fetch.ts';

/**
 * Build a CDN URL for a bin resource using its key and index.
 *
 * @param key - The bin key.
 * @param index - The resource index within the bin.
 * @returns The full CDN URL.
 *
 * @example
 * ```js
 * const url = getCdnUrl('abc1234567', 0);
 * // => 'https://cdn.sourceb.in/bins/abc1234567/0'
 * ```
 */
export const getCdnUrl = (key: string, index: number) => {
	return `${CDN_URL}/bins/${key}/${index}`;
};

/**
 * Extract a 10-character alphanumeric key from a raw string or full URL.
 *
 * Strips sourceb.in domain prefixes and returns the first matching key
 * if the remaining text is exactly 10 characters.
 *
 * @param keyOrUrl - A raw key or a full bin URL.
 * @returns The extracted 10-character key, or null when extraction fails.
 *
 * @example
 * ```js
 * const key = resolveKey('abc1234567');
 * // => 'abc1234567'
 * ```
 *
 * @example
 * ```js
 * const key = resolveKey('https://sourceb.in/bins/abc1234567');
 * // => 'abc1234567'
 * ```
 */
export const resolveKey = (keyOrUrl: string) => {
	const sanitised = keyOrUrl.replaceAll(
		/http(s)?:\/\/(sourceb.in|srcb.in)\//gi,
		'',
	);

	const key = (sanitised.match(/[a-zA-Z0-9]{10}/g) ?? [])[0];
	return sanitised.length == 10 && key ? key : null;
};
