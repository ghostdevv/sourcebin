# WARNING

This is the development branch for the next version of Sourcenin, please don't use this in production.

# Sourcebin

[![](https://img.shields.io/npm/v/sourcebin?label=Latest%20Version&style=for-the-badge&logo=npm&color=informational)](https://www.npmjs.com/package/sourcebin)
[![](https://img.shields.io/static/v1?label=Project%20Creator&message=GHOST&color=informational&style=for-the-badge)](https://ghostdev.xyz)
[![](https://img.shields.io/github/workflow/status/ghoststools/Sourcebin/CI/master?style=for-the-badge)](https://github.com/ghoststools/Sourcebin)
[![](https://img.shields.io/static/v1?label=&message=A%20GHOSTs%20Tools%20Project&color=informational&style=for-the-badge)](https://github.com/ghoststools)

Fast and simple package to get and create bins from [sourcebin](https://sourceb.in/)

# Requirements

```
NodeJS >= 10.x
```

# Install

```
npm install sourcebin
```

# Setup

Node JS

```js
const sourcebin = require('sourcebin');
```

TypeScript

```ts
// TO DO
```

For es imports such as the TypeScript import it's recommened you only import the methods you need

# Methods

-   ### Get
    `sourcebin.get(key or url, options)`<br>
    ```js
    const bin = await sourcebin.get('qXO2NVhRc6');
    ```
-   ### Create
    // To do
-   ### Url

    `sourcebin.url(key or url)`<br>

    ```js
    const { url, short } = url('qXO2NVhRc6');
    ```

# Support

-   Message me on discord: `GHOST#7524`<br>
-   Join the [discord](https://discord.gg/2Vd4wAjJnm)
-   Create a issue on the [github](https://github.com/ghoststools/Sourcebin)
