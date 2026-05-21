/**
 * Represents the data for a single file within a bin.
 */
export interface FileData {
	/** The file name. */
	name?: string;
	/** The file content. */
	content?: string;
	/** The language identifier assigned to this file. */
	languageId: number;
}

/**
 * Represents full bin data, including file contents.
 */
export interface BinData {
	/** The number of times this bin has been accessed. */
	hits: number;
	/** The unique key identifying the bin. */
	key: string;
	/** The title of the bin. */
	title?: string;
	/** The description of the bin. */
	description?: string;
	/** An array of files contained in this bin. */
	files: FileData[];
	/** The timestamp when the bin was created. */
	created: string;
}

/**
 * Represents a bin as returned by a GET request.
 * Excludes file contents fromthe full bin data.
 */
export interface GETBin extends Omit<BinData, 'files'> {
	/** An array of file metadata without content. */
	files: Omit<FileData, 'content'>[];
}

/**
 * Represents the request body when posting one or more bins.
 */
export interface POSTBinsBody {
	/** The title of the bin. */
	title?: string;
	/** The description of the bin. */
	description?: string;
	/** An array of files to include in the bin. */
	files: FileData[];
}

/**
 * Represents the response after successfully creating a bin.
 */
export interface POSTBinsResponse {
	/** The unique key assigned to the newly created bin. */
	key: string;
}

/**
 * Represents a single entry returned by the Sourcebin Linguist service, providing
 * metadata about a programming language or file type.
 */
export interface SourcebinLinguistItem {
	/** The display name of the language. */
	name: string;
	/** The Hex colour code representing this language. */
	color: string;
	/** A file extension associated with this language. */
	extension: string;
	/** Additional aliases for the language. */
	aliases?: string[];
	/** The Ace editor mode used for syntax highlighting. */
	aceMode: string;
}
