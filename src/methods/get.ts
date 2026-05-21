import { API_URL, CDN_URL, USER_AGENT } from '../utils/fetch.ts';
import type { FileData, GETBin } from '../types.ts';
import { resolveKey } from '../utils/url.ts';
import { Bin } from '../structures/bin.ts';

/**
 * Options for fetching a sourcebin.
 */
export interface GetOptions {
	/**
	 * Whether to fetch the full content of each file. Set to `false` to retrieve metadata only.
	 *
	 * @default true
	 */
	fetchContent?: boolean;
	/**
	 * The key of the sourcebin, or a full sourcebin URL.
	 */
	key: string;
}

/**
 * Retrieves a sourcebin by its key or URL and returns a Bin instance.
 *
 * @param options - The options for fetching the sourcebin.
 * @returns A promise resolving to a Bin instance.
 *
 * @example
 * ```js
 * import { get } from 'sourcebin';
 *
 * const bin = await get({ key: 'abc123' });
 * console.log(bin.title);
 * ```
 */
export const get = async (options: GetOptions) => {
	const { fetchContent = true } = options;
	const key = resolveKey(options.key);

	const response = await fetch(`${API_URL}/bins/${key}`, {
		headers: {
			Accept: 'application/json',
			'User-Agent': USER_AGENT,
		},
	});

	const data = (await response.json()) as GETBin;

	const parsedFiles: FileData[] = [];

	if (fetchContent) {
		for (let i = 0; i < data.files.length; i++) {
			const index = i;

			const response = await fetch(`${CDN_URL}/bins/${key}/${index}`, {
				headers: {
					'User-Agent': USER_AGENT,
				},
			});

			parsedFiles.push({
				...data.files[index],
				content: await response.text(),
			});
		}
	}

	return new Bin({
		...data,
		files: parsedFiles,
	});
};
