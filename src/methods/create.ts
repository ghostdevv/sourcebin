interface FileOptions {
    title?: string;
    content: string;
    language: number | string;
}

export interface CreateOptions {
    title?: string;
    description?: string;
    files: FileOptions[];
}

export const create = async ({ files, ...options }: CreateOptions) => {
    if (!Array.isArray(files) || !files.length)
        throw new TypeError('Expected an array of one or more files');

    if (files.length > 1) {
        throw new Error(
            'You must have Sourcebin pro in order to have multiple files in one bin. This is currently not supported with this library',
        );
    }

    
};
