import type { POSTBinsBody, POSTBinsResponse } from '../types';
import { languages } from '@sourcebin/linguist';
import type { AxiosResponse } from 'axios';
import { fetch } from '../utils/fetch';
import { get } from './get';

interface FileOptions {
    name?: string;
    content: string;
    language: number | string;
}

export interface CreateOptions {
    title?: string;
    description?: string;
    files: FileOptions[];
    fetchContent?: boolean;
}

export const create = async ({ files, ...options }: CreateOptions) => {
    if (!Array.isArray(files) || !files.length)
        throw new TypeError('Expected an array of one or more files');

    if (files.length > 1) {
        throw new Error(
            'You must have Sourcebin pro in order to have multiple files in one bin. This is currently not supported with this library',
        );
    }

    const data: POSTBinsBody = {
        title: options.title,
        description: options.description,
        files: [],
    };

    for (const file of files) {
        const languageId: number | undefined =
            typeof file.language == 'number'
                ? file.language
                : languages[file.language];

        if (!languageId)
            throw new Error(`Unable to find language "${file.language}"`);

        if (!Object.values(languages).includes(languageId))
            throw new Error(`Unable to find language with id "${languageId}"`);

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
