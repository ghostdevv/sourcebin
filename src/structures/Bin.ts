import { File } from '../structures/File';
import { BinData } from '../types';

export class Bin {
    public readonly key: string;

    public readonly url: string;
    public readonly shortUrl: string;

    public readonly title?: string;
    public readonly description?: string;
    public readonly views: number;

    public readonly created: Date;

    public readonly files: File[];

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
