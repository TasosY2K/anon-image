module.exports = (app, con, globalConfig) => {
    app.post("/check", (req, res) => {
        if (req.body) {
            const { id } = req.body;
            con.query(
                "SELECT id FROM Images WHERE id = ?",
                [id],
                (err, rows) => {
                    if (err) {
                        console.log(err);
                    } else {
                        if (rows.length > 0) {
                            res.status(200).send("Image exists OK");
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
