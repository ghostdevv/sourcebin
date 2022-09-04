export const url = (binKey: string) => {
    const key = resolveKey(binKey);

    if (!key)
        throw new Error(
            'Invalid item given to url, must be a valid sourcebin url or bin key',
        );

    return {
        key,
        url: `https://sourceb.in/${key}`,
        short: `http://srcb.in/${key}`,
    };
};

export const getCdnUrl = (key: string, index: number) => {
    return `https://cdn.sourceb.in/bins/${key}/${index}`;
};

export const resolveKey = (keyOrUrl: string) => {
    const sanitised = keyOrUrl.replace(
        /http(s)?:\/\/(sourceb.in|srcb.in)\//gi,
        '',
    );

    const key = (sanitised.match(/[a-zA-Z0-9]{10}/g) || [])[0];
    return sanitised.length == 10 && key ? key : undefined;
};
