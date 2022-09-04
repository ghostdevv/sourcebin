import type { BinData, GETBin } from '../types';
import type { AxiosResponse } from 'axios';
import { resolveKey } from '../utils/url';
import { Bin } from '../structures/Bin';
import { fetch } from '../utils/fetch';

export interface GetOptions {
    /**
     * @default true
     */
    fetchContent?: boolean;

    /**
     * The key of the bin, can also be a sourcebin url
     */
    key: string;
}

export const get = async (options: GetOptions) => {
    const { fetchContent = true } = options;
    const key = resolveKey(options.key);

    const { data }: AxiosResponse<GETBin> = await fetch(`/bins/${key}`);

    if (fetchContent) {
        for (let i = 0; i < data.files.length; i++) {
            const { data } = await fetch({
                baseURL: 'https://cdn.sourceb.in/',
                url: `/bins/${key}/${i}`,
                responseType: 'text',
            });

            data.files[i] = {
                ...data.files[i],
                content: data,
                index: i,
            };
        }
    }

    return new Bin(data as BinData);
};
