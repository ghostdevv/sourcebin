import type { FileData, SourcebinLinguistItem } from '../types.ts';
import { linguist } from '@sourcebin/linguist';

/**
 * Represents a single code file stored inside a bin.
 */
export class File {
	/** The URL where the raw file content can be fetched from the CDN. */
	public readonly rawUrl: string;

	/** An optional name for this file, including its extension. */
	public readonly name?: string;

	/** The raw source code content of this file. */
	public readonly content?: string;

	/** The identifier used to look up this file's programming language. */
	public readonly languageId: number;

	/** The detailed language metadata resolved from the linguist registry. */
	public readonly language: SourcebinLinguistItem;

	/**
	 * Create a new file instance from raw file data.
	 *
	 * @param key — The bin key this file belongs to.
	 * @param index — The zero-based index of this file within its bin.
	 * @param data — The file data object used to initialize this instance.
	 *
	 * @example
	 * ```js
	 * const file = new File("abc123", 0, {
	 *   name: "main.js",
	 *   content: "console.log('hello');",
	 *   languageId: 1,
	 * });
	 * ````
	 */
	constructor(key: string, index: number, data: FileData) {
		this.rawUrl = `https://cdn.sourceb.in/bins/${key}/${index}`;

		this.name = data.name;
		this.content = data.content;

		this.languageId = data.languageId;
		this.language = linguist[data.languageId];
	}
}
