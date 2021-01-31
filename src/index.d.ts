declare module 'sourcebin' {
    export function url(
        url: string,
    ): {
        key: string;
        url: string;
        short: string;
    };

    export function get(
        url: string,
        options?: {
            fetchContent?: boolean;
        },
    ): SourceBin;

    export { url, get };
    export default { url, get };

    class SourceBin {
        constructor(
            key: string,
            data: {
                key: string;
                url: string;
                short: string;
                title?: string | undefined;
                description?: string | undefined;
                views: number;
                created: string;
                timestamp?: number;
                files: File[];
            },
        );
    }

    class File {
        constructor(
            key: string,
            index: number,
            data: {
                name?: string;
                content: string;
                languageId?: number;
                language?: {
                    name: string;
                    extension: string;
                    aliases: string[];
                    aceMode: string;
                };
            },
        );
    }
}
