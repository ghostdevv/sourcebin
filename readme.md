

# Sourcebin
[![](https://img.shields.io/npm/v/sourcebin?label=Latest%20Version&style=for-the-badge&logo=npm&color=informational)](https://www.npmjs.com/package/sourcebin)
[![](https://img.shields.io/static/v1?label=Author&message=GHOST&color=informational&style=for-the-badge)](https://ghostdev.xyz)

This wrapper is designed to easily create and get bins from [sourcebin](https://sourceb.in/). You are also able to shorten the sourcebin links.

### Install
```
npm install sourcebin --save
```

### Setup
```js
const sourcebin = require('sourcebin');
```

### Create a bin
`sourcebin.create([ bin-objects ])`
```js
sourcebin.create([
	{
		content: 'This bin was made using npmjs.org/sourcebin',
		languageId: 'text'
	}
]).then(console.log)
  .catch(console.error);
```

### Get a bin
Syntax:
```
sourcebin.get("key or sourcebin url")
```

Example:
```js
sourcebin.get("62cbad45ff")
	.then(console.log)
	.catch(console.error);
```

### Shorten
Syntax:
```
sourcebin.shorten("key or sourcebin url")
```

Example:
```js
var shortLink = sourcebin.shorten("62cbad45ff");
```

### Output
Sample output for the **get** and **create** methods:
```json
{
  "key": "62cbad45ff",
  "url": "https://sourceb.in/62cbad45ff",
  "raw": "https://sourceb.in/raw/62cbad45ff",
  "short": "http://srcb.in/62cbad45ff",
  "created": "2020-04-25T20:32:28.462Z",
  "files": [
    {
      "languageId": 372,
      "language": {
        "name": "Text",
        "extension": "txt",
        "aliases": [
          "fundamental"
        ],
        "aceMode": "text"
      },
      "content": "This bin was made using npmjs.org/sourcebin"
    }
  ]
}
```

Sample output for the **shorten** method:
```
http://srcb.in/62cbad45ff
```
### Support

You can message me on discord: `GHOST#7524` or create a issue on the [github](https://github.com/ghostdevv/Sourcebin)
