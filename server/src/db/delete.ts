import * as express from 'express';
import { jsonBodyParser } from './json-body-parser';
import { _pool } from './sql-connection';


/** 
 * Add delete CRUD handler to app.
 * @param app 
 */
function _delete(
        app: express.Express,
        pathName: string,
        tableName: string) {

    app.post(
            '/api/' + pathName + '/delete', 
            jsonBodyParser,
            async (req, res, next) => {

        let id = req.body as number;

        let queryStr = 
            `DELETE FROM ${tableName} \n` +
            `WHERE id = ${id}`;

        const conn = await (await _pool).getConnection();
        try {
            let result = await conn.query(queryStr);

            res .status(204)
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


export { _delete }
