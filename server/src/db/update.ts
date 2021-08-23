import * as express from 'express';
import { _pool } from './sql-connection';
import { jsonBodyParser } from './json-body-parser';
import { toFields } from './to-fields';
import { NumberOrStringValsObj } from './obj-to-field-vals';
import { objToUpdStr } from './obj-to-upd-str';


/** 
 * Add update CRUD handler to app.
 * @param app 
 */
function update<T extends NumberOrStringValsObj & { id: number }>(
        app: express.Express,
        pathName: string,
        tableName: string) {

    app.post(
            '/api/' + pathName + '/update', 
            jsonBodyParser,
            async (req, res, next) => {

        let item = req.body as T;
        let obj = toFields(item);

        let sqlStr = 
            `UPDATE ${tableName} \n` +
            `SET ${objToUpdStr(obj)} \n` +
            `WHERE id = ${item.id}`;

        const conn = await (await _pool).getConnection();
        try {
            let result = await conn.query(sqlStr);

            res .status(204)
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


export { update }
