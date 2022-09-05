import axios from 'axios';

export const fetch = axios.create({
    baseURL: 'https://sourceb.in/api',

    headers: {
        'User-Agent': `SourcebinJS https://www.npmjs.com/package/sourcebin`,
    },
});
