const shortid = require("shortid");

exports.id = () => {
    return shortid.generate();
};
