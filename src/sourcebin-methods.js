
const fetch = require('node-fetch');
const formGetURL = (key) => `https://sourceb.in/api/bins/${key}/`;
const formPostURL = () => 'https://sourceb.in/api/bins/';
const linguist = require('@sourcebin/linguist/dist/linguist.json');
const version = require('../package.json').version || '-';

module.exports = class SourceBinMethods {

    constructor() {

    };

    static get = (key) => {

        return new Promise((resolve, reject) => {

            if (!key || !key.match(/[0-9a-fA-F]{10}/g)) return reject(new SyntaxError('Invalid key provided - SourceBin#get'));

            key = key.match(/[0-9a-fA-F]{10}/g)[0];

            fetch(formGetURL(key))
                .then(res => res.json())
                .then(data => {

                    if (data.message) return reject(new Error(data.message))
                    
                    let cont = 0;
                    
                    let parsedFiles = data.files.map(f => {
                        
                        cont++;  

                        return {

                            raw: `https://sourceb.in/raw/${key}/${cont - 1}`,
                            name: f.name,
                            content: f.content,
                            languageId: f.languageId,
                            language: linguist[f.languageId],

                        };

                    });

                    resolve({
                        key: key,
                        url: `https://sourceb.in/${key}`,
                        short: this.shorten(key),
                        title: data.title,
                        description: data.description,
                        created: data.created,
                        files: parsedFiles
                    });

                })
                .catch(reject);

        });

    };

    static create = (bins, options = {}) => {

        return new Promise((resolve, reject) => {

            if (!bins || !Array.isArray(bins)) return reject(new TypeError('Invalid bins array provided - SourceBin#create'));
            if (bins.length == 0) return reject(new SyntaxError('No bins provided - SourceBin#create'));

            let parsedBins = [];

            for (var x = 0; x < bins.length; x++) {

                let bin = bins[x];

                if ((typeof bin !== 'object')) return reject(new TypeError('Invalid bin provided - SourceBin#create'));
                if (!bin.content || (typeof bin.content !== 'string')) return reject(new TypeError('Invalid bin content provided - SourceBin#create'));

                bin.languageId = this.getLanguageId(bin.languageId);

                let parsedBin = { content: bin.content, languageId: bin.languageId };
                if (bin.name) parsedBin.name = bin.name;

                parsedBins.push(parsedBin);

            };

            const binObject = { files: parsedBins };

            if (options.title) binObject.title = options.title;
            if (options.description) binObject.description = options.description;

            fetch(formPostURL(), {
                method: 'POST',
                body: JSON.stringify(binObject),
                headers: {
                    'Content-Type': 'application/json',
                    'User-Agent': `npm/sourcebin @ V${version}`
                }
            }).then(res => {
                if (res.ok) {
                    return res;
                } else {
                    reject(res.statusText);
                };
            })
            .then(res => res.json())
            .then(res => {
            
                let cont = 0;

                let parsedFiles = parsedBins.map(f => { 

                    cont++;  

                    return {

                        raw: `https://sourceb.in/raw/${res.key}/${cont - 1}`,
                        name: f.name,
                        content: f.content,
                        languageId: f.languageId,
                        language: linguist[f.languageId]

                    };

                });

                resolve({

                    key: res.key,
                    url: `https://sourceb.in/${res.key}`,
                    short: this.shorten(res.key),
                    title: options.title,
                    description: options.description,
                    created: new Date(),
                    files: parsedFiles

                });

            });

        });

    };

    static shorten = (key) => {

        if (!key || !key.match(/[0-9a-fA-F]{10}/g)) throw new SyntaxError('Invalid key provided - SourceBin#shorten')

        key = key.match(/[0-9a-fA-F]{10}/g)[0];
        
        return `http://srcb.in/${key}`;
        
    };

    static getLanguageId = (i) => {

        if (!i) return(372);
        if (Number(i) && Object.keys(linguist).map(Number).includes(Number(i))) return Number(i);

        i = i.toLowerCase()
        let found = Object.keys(linguist).find(key => {
            
            if (linguist[key].name.toLowerCase() == i) return key;
            if (linguist[key].extention && linguist[key].extention == i) return key;
            if (linguist[key].aliases && linguist[key].aliases.includes(i)) return key;

        });

        if (!found) return 372;
        
        return Number(found);

    };

};