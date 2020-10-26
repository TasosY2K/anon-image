require("dotenv").config();
const fs = require("fs");
const mysql = require("mysql");

const express = require("express");
const app = express();
const port = process.env.WEB_PORT;

const filewalker = require("./scripts/utility/fileWalker.js");

const uploadDir = "./uploads";

if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir);

const globalConfig = process.env;

const mysqlOptions = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
};

const con = mysql.createConnection(mysqlOptions);

con.connect((err) => {
    if (err) {
        console.log(err);
        process.exit();
    }

    conn.query("SELECT * FROM Images", (err, rows) => {
        if (err) {
            console.log(err);
            process.exit();
        }
    });
});

app.set("json spaces", 2);

app.use(express.json({ limit: "5mb" }));

(async () => {
    const routes = await filewalker.walk(__dirname + "/routes/");

    routes.forEach((route) => {
        const time = new Date().getMilliseconds();
        require(route.path)(app, con, globalConfig);
        console.log(
            `Loaded ${route.name} in ${new Date().getMilliseconds() - time}ms`
        );
    });

    app.use("/", express.static(`${__dirname}/public`));

    app.get("*", (req, res) => {
        res.sendStatus(404);
    });
})();

app.listen(port, () => console.log(`Server started at port:${port}`));
