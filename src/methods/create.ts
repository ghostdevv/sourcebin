import type { POSTBinsBody, POSTBinsResponse } from '../types.ts';
import { API_URL, USER_AGENT } from '../utils/fetch.ts';
import { resolveLanguageId } from '../utils/languages.ts';
import { get } from './get.ts';

/**
 * Options for a file when creating a new sourcebin.
 */
export interface FileOptions {
	/**
	 * The name of the file.
	 */
	name?: string;

	/**
	 * The content of the file.
	 */
	content: string;

	/**
	 * The programming language identifier. Accepts a language name or ID.
	 * @default "text"
	 */
	language?: number | string;
}

/**
 * Options for creating a new sourcebin.
 */
export interface CreateOptions {
	/**
	 * The title of the sourcebin.
	 */
	title?: string;

	/**
	 * A description of the sourcebin.
	 */
	description?: string;

	/**
	 * An array of files to include in the sourcebin.
	 */
	files: FileOptions[];

	/**
	 * Whether to fetch the full content of the created sourcebin.
	 * @default true
	 */
	fetchContent?: boolean;
}

/**
 * Creates a new sourcebin from the provided options and returns a Bin instance.
 *
 * @param options - The options for creating the sourcebin.
 * @returns A promise resolving to a Bin instance.
 *
 * @example
 * ```js
 * import { create } from 'sourcebin';
 *
 * const bin = await create({
 *   title: 'My Example',
 *   files: [{ name: 'hello.ts', content: 'console.log("Hello, world!");' }],
 * });
 * ```
 */
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
		const languageId = resolveLanguageId(file.language ?? 'text');

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
