import { Db, emptyDb } from "../state/db";
import { readAllExample } from "./example-table";


async function readAll(): Promise<Db> {

    let db = emptyDb;

    db = await readAllExample(db);

    return db;
}


export {readAll}