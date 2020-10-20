const crypto = require("crypto");

exports.id = () => {
    return crypto.randomBytes(16).toString("hex");
};
