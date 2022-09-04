# Sourcebin

[![](https://img.shields.io/npm/v/sourcebin?label=Latest%20Version&style=for-the-badge&logo=npm&color=informational)](https://www.npmjs.com/package/sourcebin)
[![](https://img.shields.io/static/v1?label=Project%20Creator&message=GHOST&color=informational&style=for-the-badge)](https://ghostdev.xyz)
[![](https://img.shields.io/github/workflow/status/ghostdevv/Sourcebin/Test%20Suite%20CI?style=for-the-badge)](https://github.com/ghostdevv/Sourcebin)

Fast and simple package to get and create bins from [sourcebin](https://sourceb.in/)

# Requirements

```
NodeJS >= 14.x
```

# Install

```
npm install sourcebin
```

# Setup

```js
// Import individual methods
import { create, get, url } from 'sourcebin';

// Import all methods
import * as sourcebin from 'sourcebin';

// Use required
const { create, get, url } = require('sourcebin');
```

# Get a bin

`sourcebin.get(options)`

```js
const bin = await sourcebin.get({
    key: 'qXO2NVhRc6'
});
```

## Options

| Option         | Description                       | Default | Required |
|----------------|-----------------------------------|---------|----------|
| `key`          | The key to get                    | n/a     | ✅       |
| `fetchContent` | Should the bin content be fetched | `true`  | ❌       |

# Create a bin

`sourcebin.create(options)`

```js
const bin = await sourcebin.create(
    {
        title: 'bin name',
        description: 'test bin',
        files: [
            {
                content: 'Hello World',
                language: 'text',
            },
        ],
    },
);
```
## Options

| Option         | Description                       | Default | Required |
|----------------|-----------------------------------|---------|----------|
| `key`          | The key to get                    | n/a     | ✅       |
| `fetchContent` | Should the bin content be fetched | `true`  | ❌       |

### Options

`title` - bin title<br>
`description` - bin description

# Other Methods

-   ### Url

    `sourcebin.url(key or url)`<br>

    ```js
    const { url, short } = url('qXO2NVhRc6');
    ```

# FAQ

-   ### Multiple files in one bin
    This is not currently possible with this wrapper as sourcebin doesn't have a token system for authentication, only pro users are able to have multiple files in one bin. This may come in the future

# Support

-   Message me on discord: `GHOST#7524`<br>
-   Join the [discord](https://discord.gg/2Vd4wAjJnm)
-   Create a issue on the [github](https://github.com/ghostdevv/Sourcebin)
