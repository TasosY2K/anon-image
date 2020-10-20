require("dotenv").config();
const fs = require("fs");
const mysql = require("mysql");

const mysqlOptions = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS
};

const con = mysql.createConnection(mysqlOptions);

con.query("CREATE DATABASE ??", [process.env.DB_NAME], (err) => {
    if (err) {
        console.log(err);
    } else {
        con.query("USE ??", [process.env.DB_NAME], (err) => {
            if (err) {
                console.log(err);
            } else {
                con.query(
                    fs
                        .readFileSync(`${__dirname}/sql/createTableImages.sql`)
                        .toString(),
                    (err) => {
                        if (err) {
                            console.log(err);
                        } else {
                            console.log("Database setup OK");
                            con.end();
                        }
                    }
                );
            }
        });
    }
});
