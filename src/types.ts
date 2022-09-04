export interface FileData {
    name?: string;
    index: number;
    content?: string;
    languageId: number;
}

export interface BinData {
    hits: number;
    key: string;
    title?: string;
    description?: string;
    files: FileData[];
    created: string;
}

export interface GETBin extends Omit<BinData, 'files'> {
    files: Omit<FileData, 'content' | 'index'>[];
}
