import type { POSTBinsBody, POSTBinsResponse } from '../types.ts';
import { API_URL, USER_AGENT } from '../utils/fetch.ts';
import { resolveLanguageId } from '../utils/languages.ts';
import { get } from './get.ts';

export interface FileOptions {
	name?: string;
	content: string;

	/**
	 * @default "text"
	 */
	language?: number | string;
}

export interface CreateOptions {
	title?: string;
	description?: string;
	files: FileOptions[];
	fetchContent?: boolean;
}

export const create = async (options: CreateOptions) => {
	if (!Array.isArray(options.files) || !options.files.length)
		throw new TypeError('Expected an array of one or more files');

	if (options.files.length > 1) {
		throw new Error(
			'You must have Sourcebin pro in order to have multiple files in one bin. This is currently not supported with this library',
		);
	}

	const body: POSTBinsBody = {
		title: options.title,
		description: options.description,
		files: [],
	};

	for (const file of options.files) {
		const languageId = resolveLanguageId(file.language || 'text');

		body.files.push({
			languageId,
			content: file.content,
			name: file.name,
		});
	}

	const response = await fetch(`${API_URL}/bins`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json',
			'User-Agent': USER_AGENT,
		},
		body: JSON.stringify(body),
	});

	const data = (await response.json()) as POSTBinsResponse;

	return await get({
		fetchContent: options.fetchContent ?? true,
		key: data.key,
	});
};
