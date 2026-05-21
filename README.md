# Sourcebin

Fast and simple package to get and create bins from [sourcebin](https://sourceb.in/)

# Requirements

Node `>=22.13`

## Getting

`get(options)`

```js
import { get } from 'sourcebin';

const bin = await get({ key: 'qXO2NVhRc6' });
```

### Options

| Option         | Description                       | Default | Required |
| -------------- | --------------------------------- | ------- | -------- |
| `key`          | The key to get                    | n/a     | ✅       |
| `fetchContent` | Should the bin content be fetched | `true`  | ❌       |

## Creating

`create(options)`

```js
import { create } from 'sourcebin';

const bin = await create({
	title: 'bin name',
	description: 'test bin',
	files: [
		{
			content: 'Hello World',
			language: 'text',
		},
	],
});
```

### Options

| Option        | Description            | Required |
| ------------- | ---------------------- | -------- |
| `title`       | Title of the bin       | ❌       |
| `description` | Description of the bin | ❌       |
| `files`       | Bin files - see below  | ✅       |

#### File Options

| Option     | Description                      | Default | Required |
| ---------- | -------------------------------- | ------- | -------- |
| `content`  | Contents of the file             | n/a     | ✅       |
| `language` | What language should the file be | `text`  | ❌       |

## URL Helper

Constructs the long and short Sourcebin URL for a key.

```js
const urlData = url('iQznILdZRP');

// or

const urlData = url('https://sourceb.in/iQznILdZRP');
```

This returns an object that looks like:

```js
{
  key: 'iQznILdZRP',
  url: 'https://sourceb.in/iQznILdZRP',
  short: 'http://srcb.in/iQznILdZRP'
}
```

# FAQ

- ## Multiple files in one bin

    Only Sourcebin Pro users are able to have multiple files per bin, and since there is no non-hacky way to authenticate this library doesn't currently support multiple files. We can add support in the future if they add a way to authenticate with the API.

- ## Migrate from v5 to v6

    This was just a maintenance release and the API hasn't actually changed. You will need to use Node `>=22.13` or above, as we removed the dependency on axios in favour of [native `fetch`](https://nodejs.org/docs/latest-v22.x/api/globals.html#fetch). Additionally, this package is now esm only which shouldn't cause any problems thanks to [`require(esm)`](https://nodejs.org/docs/latest-v25.x/api/modules.html#loading-ecmascript-modules-using-require), but if you experience [any issues please open one](https://github.com/ghostdevv/sourcebin/issues/new).

- ## Migrate from v4 to v5

    [See the README from a v5 release](https://github.com/ghostdevv/sourcebin/blob/611318be1b4aff17d19f80df20b73908ddf53376/README.md#migrate-from-v4-to-v5)
