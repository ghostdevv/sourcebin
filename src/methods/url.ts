import { resolveKey } from '../utils/url';

export const url = (keyOrUrl: string) => {
    const key = resolveKey(keyOrUrl);

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
