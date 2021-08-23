import { Db } from "../state/db";
import { Example } from "../state/example";
import { PartialId, PartialK } from "../ts-utility/partial-some";

async function readAllExample(db:Db): Promise<Db> {
    const url = '/api/example/read-all'
    const response = await fetch(url, {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'default', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
          'Content-Type': 'application/json'
        },
        redirect: 'follow', // manual, *follow, error
        // body: JSON.stringify(data) // body data type must match "Content-Type" header
      });
    const examples = await response.json() as Example[];
    // Some processing of `example` can take place here.
    // This is called Object-Relational Impedence 
    return {...db, examples:examples}
}

function createExample(db:Db) {
    return async function(example: PartialId<Example>): Promise<Db> {
        const url = '/api/example/create'
        const response = await fetch(url, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(example) // body data type must match "Content-Type" header
        });
        const id = await response.json() as number;
        const example_ = {...example, id};
        //const example = await response.json()
        // Some processing of `example` can take place here.
        // This is called Object-Relational Impedence

        const examples = (db.examples || []).slice();
        examples.push(example_);

        return {...db, examples }
    }
}

function updateExample(db:Db) {
    return async function(example:Example): Promise<Db> {
        const url = '/api/example/update'
        const response = await fetch(url, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(example) // body data type must match "Content-Type" header
        });
        if (!response.ok) {
            throw new Error('fetch reponse not OK')
        } 

        const examples = (db.examples || []).slice();
        const index = examples.findIndex(example_ => example_.id === example.id)
        examples.splice(index, 1, example)
        //const example = await response.json()
        // Some processing of `example` can take place here.
        // This is called Object-Relational Impedence 
        return {...db, examples}
    }
}

function deleteExample(db:Db) {
    return async function(id:number): Promise<Db> {
        const url = '/api/example/delete'
        const response = await fetch(url, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(id) // body data type must match "Content-Type" header
        });
        if (!response.ok) {
            throw new Error('fetch reponse not OK')
        } 

        const examples = (db.examples || []).slice();
        const index = examples.findIndex(example_ => example_.id === id)
        examples.splice(index, 1)
        //const example = await response.json()
        // Some processing of `example` can take place here.
        // This is called Object-Relational Impedence 
        return {...db, examples}
    }
}



export {createExample, readAllExample, updateExample, deleteExample}

