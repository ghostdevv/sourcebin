import { File } from '../structures/file.ts';
import type { BinData } from '../types.ts';

/**
 * Represents a source bin containing one or more code files.
 */
export class Bin {
	/** The unique identifier for this bin. */
	public readonly key: string;

	/** The canonical URL pointing to this bin on sourceb.in. */
	public readonly url: string;

	/** The shortened URL pointing to this bin on srcb.in. */
	public readonly shortUrl: string;

	/** An optional human-readable title for this bin. */
	public readonly title?: string;

	/** An optional description providing context about this bin. */
	public readonly description?: string;

	/** The number of times this bin has been viewed. */
	public readonly views: number;

	/** The timestamp when this bin was originally created. */
	public readonly created: Date;

	/** The collection of code files contained within this bin. */
	public readonly files: File[];

	/**
	 * Create a new bin instance from raw bin data.
	 *
	 * @param data — The bin data object used to initialize this instance.
	 *
	 * @example
	 * ```js
	 * const bin = new Bin({
	 *   key: "abc123",
	 *   title: "My snippet",
	 *   description: "A quick example",
	 *   hits: 42,
	 *   created: "2024-01-15T10:30:00Z",
	 *   files: [{ name: "main.js", content: "console.log('hi');", languageId: 1 }],
	 * });
	 * ```
	 */
	constructor(data: BinData) {
		this.key = data.key;

		this.url = `https://sourceb.in/${data.key}`;
		this.shortUrl = `https://srcb.in/${data.key}`;

		this.title = data.title;
		this.description = data.description;
		this.views = data.hits;

		this.created = new Date(data.created);

		this.files = data.files.map((f, index) => new File(data.key, index, f));
	}
}
