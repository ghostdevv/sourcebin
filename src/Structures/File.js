const { linguist } = require('@sourcebin/linguist');

class File {
    constructor(key, index, data) {
        this.raw = `https://cdn.sourceb.in/bins/${key}/${index}`;

        this.name = data.name;
        this.content = data.content;

        this.languageId = data.languageId;
        this.language = linguist[data.languageId];
    }
}

module.exports = File;
