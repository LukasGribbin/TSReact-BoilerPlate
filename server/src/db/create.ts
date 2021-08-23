import * as express from 'express';
import { _pool } from './sql-connection';
import { jsonBodyParser } from './json-body-parser';
import { toFields } from './to-fields';
import { NumberOrStringValsObj, objToFieldVals } from './obj-to-field-vals';
import { objToFieldNames } from './obj-to-field-names';
import { getLastAutoIncVal } from './get-last-auto-inc-val';


/**
 * Add create CRUD handler to app.
 * @param app 
 */
function create<T extends NumberOrStringValsObj & { id: number }>(
        app: express.Express,
        pathName: string,
        tableName: string): void {

    app.post(
            '/api/' + pathName + '/create', 
            jsonBodyParser, 
            async (req, res, next) => {

        const item = req.body as T;

        const obj = toFields(item);

        const queryStr = 
            `INSERT INTO ${tableName} \n` +
            `(${objToFieldNames(obj)}) \n` +
            `VALUES (${objToFieldVals(obj)})`;

        const conn = await (await _pool).getConnection();

        try {
            const result = await conn.query(queryStr);
            const id = await getLastAutoIncVal(conn);

            res .status(200)
                .set('Content-Type', 'application/json')
                .send(JSON.stringify(id))
                .end();

        } catch (e) {
            console.log('sql error: ');
            console.log(queryStr);
            
            throw e;
        } finally {
            conn.release();
        }
    })
}




export { create }
