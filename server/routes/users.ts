import * as express from 'express'
import {con} from '../sql-connection'

const jsonParser = express.json()
const urlEncoded = express.urlencoded()

const mytable = "lukas"
// const mytable = "mytable"

console.log('file called');


// Getting All
function getAll(router: express.Application) {
    //console.log('aaa')
    router.get('/user', async (req, res) => {
        try {
            let con_ = await con
            const result = await con_.query("SELECT * FROM " + mytable)
            // console.log(JSON.stringify(result));
            res.send(JSON.stringify(result))
            res.end();    

        } catch (err) {
            res.status(500).json({message: err.message})
        }
    })
}

// Getting One
function getOne(router: express.Application) {
    router.get('/user/:id', async (req, res) => {
        try {
            // let id: string = req.params.id
            let con_ = await con
            const result = await con_.query("SELECT * FROM " + mytable + " WHERE id = " + req.params.id)
            res.send(JSON.stringify(result))
            res.end();    
        } catch (err) {
            res.status(500).json({message: err.message})
        }
    })
}


// Creating One
function createOne(router: express.Application) {
    router.post('/user', urlEncoded, jsonParser ,async (req, res) => {
        try {
            const {firstname, lastname, age} = req.body

            let con_ = await con;
            const sqlStr =
                `INSERT INTO ${mytable} (firstname, lastname, age)
                VALUES ('${firstname}', '${lastname}', ${age})`
            console.log(sqlStr)
            const result = await con_.query(sqlStr)
            res.status(201).send(JSON.stringify(result))
            res.end();  
        } catch (err){
            res.status(400).json({message: err.message})
        }

    })
}


// Updating One
function patch(router: express.Application) {
    router.patch('/user/:id', urlEncoded, jsonParser , async(req, res) => {
        try {
            const {firstname, lastname, age} = req.body

            let con_ = await con;
            
            const sqlStr =
                `UPDATE ${mytable} 
                SET firstname = '${firstname}', lastname = '${lastname}', age = ${age}
                WHERE id = ${req.params.id}`
            console.log(sqlStr)
            const result = await con_.query(sqlStr)
            res.status(201).send(JSON.stringify(result))
            res.end();  
        } catch (err){
            res.status(400).json({message: err.message})
        }
    })
}


// Deleting One
function delete_(router: express.Application) {
    router.delete('/user/:id', async (req, res) => {
        try {
            // let id: string = req.params.id
            let con_ = await con
            const result = await con_.query("DELETE FROM " + mytable + " WHERE id = " + req.params.id)
            res.send(JSON.stringify(result))
            res.end();    
        } catch (err) {
            res.status(500).json({message: err.message})
        }
    })
}


function routeUser(router: express.Application) {
    getAll(router);
    getOne(router);
    createOne(router);
    patch(router);
    delete_(router);
}


export {routeUser}