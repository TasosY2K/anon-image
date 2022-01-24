require("dotenv").config();
const fs = require("fs");
const mysql = require("mysql2");

const mysqlOptions = {
    port: process.env.DB_PORT,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS
};

const con = mysql.createConnection(mysqlOptions);

con.query("DROP DATABASE ??", [process.env.DB_NAME], (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Database deleted OK");
        con.end();
    }
});
