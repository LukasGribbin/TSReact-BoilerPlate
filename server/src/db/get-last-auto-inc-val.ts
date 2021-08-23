import { PoolConnection } from "promise-mysql";


async function getLastAutoIncVal(conn: PoolConnection) {
    const sqlStrLastAutoIncId = `SELECT last_insert_id() AS id`;

    const idRes: [{ id: number }] = await conn.query(sqlStrLastAutoIncId);
    const id = idRes[0].id;

    return id;
}


export { getLastAutoIncVal };