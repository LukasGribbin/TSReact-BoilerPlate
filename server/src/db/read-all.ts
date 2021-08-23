import * as express from 'express';
//import { con as con_ } from './sql-connection';
import { _pool } from './sql-connection';
import { jsonBodyParser } from './json-body-parser';

/*
import * as mysql from 'promise-mysql';

const configStr = {
    host: "localhost",
    user: "root",
    password: "",
    database: "example"
}

const _pool = mysql.createPool(configStr);

async function con(): Promise<mysql.PoolConnection> {
    let pool = await _pool;

    return pool.getConnection();
}
*/


function readAll(
        app: express.Express,
        pathName: string,
        tableName: string,
        fields: string[]) {
        
    app.get(
            '/api/' + pathName + '/read-all', 
            jsonBodyParser, 
            async (req, res, next) => {

        const sqlStr = `SELECT ${fields.toString()} FROM ${tableName}`;

        console.log(_pool)
        const pool = await _pool;
        const conn = await pool.getConnection();
        
        try {
            let result = await conn.query(sqlStr);

            res .status(200)
                .set('Content-Type', 'application/json')
                .send(JSON.stringify(result))
                .end();

        } catch (e) {
            console.log('sql error:');
            console.log(sqlStr);

            throw e;
        } finally {
            conn.release();
        }
    })
}


export { readAll }
