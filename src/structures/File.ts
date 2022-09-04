import { linguist } from '@sourcebin/linguist';
import { FileData } from '../types';

// TODO improve
type LinguistObject = typeof linguist extends Record<infer K, infer V>
    ? V
    : never;

export class File {
    public readonly rawUrl: string;

    public readonly name?: string;
    public readonly content?: string;

    public readonly languageId: number;
    public readonly language: LinguistObject;

    constructor(key: string, data: FileData) {
        this.rawUrl = `https://cdn.sourceb.in/bins/${key}/${data.index}`;

        this.name = data.name;
        this.content = data.content;

        this.languageId = data.languageId;
        this.language = linguist[data.languageId];
    }
}
