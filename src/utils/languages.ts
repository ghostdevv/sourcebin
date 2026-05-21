import { languages, linguist } from '@sourcebin/linguist';

/**
 * Resolve a language identifier from either its name or numeric ID.
 *
 * Accepts a string name (matched against the language name and aliases,
 * case-insensitive) or a numeric ID (validated against the known languages
 * table).
 *
 * @param language - Language name or ID to resolve.
 * @returns The numeric language ID.
 * @throws Error if the language cannot be found.
 *
 * @example
 * ```js
 * const id = resolveLanguageId('typescript');
 * // => 384
 * ```
 *
 * @example
 * ```js
 * const id = resolveLanguageId(17);
 * // => 17
 * ```
 */
export function resolveLanguageId(language: string | number) {
	if (typeof language == 'number') {
		if (!Object.values(languages).includes(language))
			throw new Error(`Unable to find language with id "${language}"`);

		return language;
	}

	// oxlint-disable-next-line no-param-reassign
	language = language.toLowerCase();

	for (const [id, data] of Object.entries(linguist)) {
		const hasLanguage =
			data.name.toLowerCase() == language ||
			data.aliases?.map((a) => a.toLowerCase()).includes(language);

		if (hasLanguage) {
			return Number(id);
		}
	}

	// This runs if none of the above checks pass
	throw new Error(`Unable to find language "${language}"`);
}
