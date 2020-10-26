module.exports = (app, con, globalConfig) => {
    app.get("/stats", (req, res) => {
        con.query("SELECT * FROM Images", (err, rows) => {
            res.status(200).json({ imageNumber: rows.length });
        });
    });
};
