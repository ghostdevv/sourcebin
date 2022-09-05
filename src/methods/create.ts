import type { POSTBinsBody, POSTBinsResponse } from '../types';
import { resolveLanguageId } from '../utils/languages';
import type { AxiosResponse } from 'axios';
import { fetch } from '../utils/fetch';
import { get } from './get';

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

    const data: POSTBinsBody = {
        title: options.title,
        description: options.description,
        files: [],
    };

    for (const file of options.files) {
        const languageId = resolveLanguageId(file.language || 'text');

        data.files.push({
            languageId,
            content: file.content,
            name: file.name,
        });
    }

    const res: AxiosResponse<POSTBinsResponse> = await fetch('/bins', {
        method: 'POST',
        data,
    });

    return await get({
        fetchContent: options.fetchContent || true,
        key: res.data.key,
    });
};
