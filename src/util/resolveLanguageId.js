const { linguist, languages } = require('@sourcebin/linguist');

/**
 * Turns a language id or language string to language id
 * @param {string|number} item language string or id
 * @return {number|undefined} Language id or undefined if invalid language
 */
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
