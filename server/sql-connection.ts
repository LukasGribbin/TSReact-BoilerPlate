import * as mysql from 'promise-mysql';

const configStr = {
    host: "localhost",
    user: "root",
    // password: "",
    password: "",
    database: "tech"
    // database: "mydatabase"
}

const con = mysql.createPool(configStr);

export {con}