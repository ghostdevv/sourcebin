import { languages, linguist } from '@sourcebin/linguist';

export function resolveLanguageId(language: string | number) {
    if (typeof language == 'number') {
        if (!Object.values(languages).includes(language))
            throw new Error(`Unable to find language with id "${language}"`);

        return language;
    }

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
