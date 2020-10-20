const fs = require("fs");
const bcrypt = require("bcryptjs");

module.exports = (app, con, globalConfig) => {
    app.post("/serve", (req, res) => {
        if (req.body) {
            const { id, password } = req.body;
            console.log(req.body);
            con.query(
                "SELECT pass FROM Images WHERE id = ?",
                [id],
                (err, rows) => {
                    if (err) {
                        console.log(err);
                    } else {
                        if (rows.length > 0) {
                            if (bcrypt.compareSync(password, rows[0].pass)) {
                                con.query(
                                    "SELECT local_path FROM Images WHERE pass = ?",
                                    [rows[0].pass],
                                    (err, rows) => {
                                        const imageData = fs.readFileSync(
                                            rows[0].local_path,
                                            "base64"
                                        );
                                        res.status(200).json(
                                            JSON.stringify({ data: imageData })
                                        );
                                    }
                                );
                            } else {
                                res.status(403).send("Wrong password");
                            }
                        } else {
                            res.status(404).send("Image not found");
                        }
                    }
                }
            );
        } else {
            res.status(403).send("Not enough POST data");
        }
    });
};
