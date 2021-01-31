const { linguist, languages } = require('@sourcebin/linguist');

module.exports = (item) => {
    if (linguist[item]) return item;

    item = item.toLowerCase();

    for (const [lang, id] of Object.entries(languages)) {
        if (lang.toLowerCase() == item) return id;
    }

    return undefined;
};
