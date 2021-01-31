const { linguist, languages } = require('@sourcebin/linguist');

module.exports = (item) => {
    if (item == undefined) return undefined;

    if (linguist[item]) return item;
    if (typeof item == 'number') return undefined;

    item = item.toLowerCase();

    for (const [lang, id] of Object.entries(languages)) {
        if (lang.toLowerCase() == item) return id;
    }

    return undefined;
};
