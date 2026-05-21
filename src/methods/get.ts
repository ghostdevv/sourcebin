import type { BinData, FileData, GETBin } from '../types.ts';
import { resolveKey } from '../utils/url.ts';
import type { AxiosResponse } from 'axios';
import { Bin } from '../structures/Bin.ts';
import { fetch } from '../utils/fetch.ts';

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

	const { data }: AxiosResponse<GETBin> = await fetch(`/bins/${key}`);

	const parsedFiles: FileData[] = [];

	if (fetchContent) {
		for (let i = 0; i < data.files.length; i++) {
			const index = i;

			const { data: content } = await fetch({
				baseURL: 'https://cdn.sourceb.in/',
				url: `/bins/${key}/${index}`,
				responseType: 'text',
			});

			parsedFiles.push({
				...data.files[index],
				content,
			});
		}
	}

	return new Bin({
		...data,
		files: parsedFiles,
	});
};
