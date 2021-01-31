module.exports = (item) => {
    const sanitised = item.replace(/http(s)?:\/\/(sourceb.in|srcb.in)\//gi, '');
    const key = (sanitised.match(/[a-zA-Z0-9]{10}/g) || [])[0];
    return sanitised.length == 10 && key ? key : undefined;
};
