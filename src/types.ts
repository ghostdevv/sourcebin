export interface FileData {
    name?: string;
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
    files: Omit<FileData, 'content'>[];
}

export interface POSTBinsBody {
    title?: string;
    description?: string;
    files: FileData[];
}

export interface POSTBinsResponse {
    key: string;
}

export interface SourcebinLinguistItem {
    name: string;
    color: string;
    extension: string;
    aliases?: string[];
    aceMode: string;
}
