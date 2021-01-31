const File = require('./File.js');

class SourceBin {
    constructor(key, data) {
        this.key = key;

        this.url = `https://sourceb.in/${key}`;
        this.short = `https://srcb.in/${key}`;

        this.title = data.title;
        this.description = data.description;
        this.views = data.hits || data.views;

        this.created = data.created;
        this.timestamp = new Date(data.created).getTime();

        this.files = [];
        for (let i = 0; i < data.files.length; i++) {
            const file = new File(key, i, data.files[i]);
            this.files.push(file);
        }
    }
}

module.exports = SourceBin;
