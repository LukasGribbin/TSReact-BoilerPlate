import * as express from 'express';
import { readAll } from '../db/read-all';
import { create } from '../db/create';
import { update } from '../db/update';
import { _delete } from '../db/delete';
import { tableName, pathName, fields } from './example-meta';


const path = 'example';


/** 
 * Add CRUD operations to app. 
 */
function exampleCrud(app: express.Express) {
    readAll(app, pathName, tableName, fields);
    create(app, pathName, tableName);
    update(app, pathName, tableName);    
    _delete(app, pathName, tableName);
}


export { exampleCrud }
