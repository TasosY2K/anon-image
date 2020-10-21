const fs = require("fs");
const moment = require("moment");
const bcrypt = require("bcryptjs");
const generator = require("../scripts/utility/generator.js");

module.exports = (app, con, globalConfig) => {
    app.post("/upload", (req, res) => {
        if (req.body) {
            const { pass, imgData } = req.body;

            const id = generator.id();
            const password = bcrypt.hashSync(pass);
            const ip_address = req.ip;
            const time_uploaded = moment().format("YYYY-MM-DD HH:mm:ss");

            const local_path = `${__dirname}/../uploads/${id}.jpg`;

            fs.appendFileSync(local_path, imgData);

            con.query(
                "INSERT INTO Images (id, pass, local_path, ip_address, time_uploaded) VALUES (?, ?, ?, ?, ?)",
                [id, password, local_path, ip_address, time_uploaded],
                (err) => {
                    if (err) {
                        console.log(err);
                    } else {
                        res.status(200).json({
                            message: "Upload OK",
                            id: id
                        });
                    }
                }
            );
        } else {
            res.status(403).send("Not enough POST data");
        }
    });
};
