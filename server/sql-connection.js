"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.con = void 0;
const mysql = require("promise-mysql");
const configStr = {
    host: "localhost",
    user: "root",
    // password: "",
    password: "",
    database: "tech"
    // database: "mydatabase"
};
const con = mysql.createPool(configStr);
exports.con = con;
