import { API_URL, CDN_URL, USER_AGENT } from '../utils/fetch.ts';
import type { FileData, GETBin } from '../types.ts';
import { resolveKey } from '../utils/url.ts';
import { Bin } from '../structures/bin.ts';

export interface GetOptions {
	/**
	 * @default true
	 */
	fetchContent?: boolean;

	/**
	 * The key of the bin, can also be a sourcebin url
	 */
	key: string;
}

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
