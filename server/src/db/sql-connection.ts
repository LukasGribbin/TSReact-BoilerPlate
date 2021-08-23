import * as mysql from 'promise-mysql';

const configStr = {
    host: "localhost",
    user: "root",
    password: "",
    database: "example"
}

const _pool = mysql.createPool(configStr);
//console.log('aaaaaaaaaaaaaaaaaaaaa',_pool)

//async function con(): Promise<mysql.PoolConnection> {
//    let pool = await _pool;
//    return pool.getConnection();
//}

export {_pool}