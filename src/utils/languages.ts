import { languages } from '@sourcebin/linguist';

export function resolveLanguageId(language: string | number) {
    const languageId: number | undefined =
        typeof language == 'number' ? language : languages[language];

    if (!languageId) throw new Error(`Unable to find language "${language}"`);

    if (!Object.values(languages).includes(languageId))
        throw new Error(`Unable to find language with id "${languageId}"`);

    return languageId;
}
