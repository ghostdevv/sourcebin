import type { FileData, SourcebinLinguistItem } from '../types';
import { linguist } from '@sourcebin/linguist';

export class File {
    public readonly rawUrl: string;

    public readonly name?: string;
    public readonly content?: string;

    public readonly languageId: number;
    public readonly language: SourcebinLinguistItem;

    constructor(key: string, data: FileData) {
        this.rawUrl = `https://cdn.sourceb.in/bins/${key}/${data.index}`;

        this.name = data.name;
        this.content = data.content;

        this.languageId = data.languageId;
        this.language = linguist[data.languageId];
    }
}
