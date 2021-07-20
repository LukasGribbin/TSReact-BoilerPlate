"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routeUser = void 0;
const express = require("express");
const sql_connection_1 = require("../sql-connection");
const jsonParser = express.json();
const urlEncoded = express.urlencoded();
const mytable = "lukas";
// const mytable = "mytable"
console.log('file called');
// Getting All
function getAll(router) {
    //console.log('aaa')
    router.get('/user', (req, res) => __awaiter(this, void 0, void 0, function* () {
        try {
            let con_ = yield sql_connection_1.con;
            const result = yield con_.query("SELECT * FROM " + mytable);
            // console.log(JSON.stringify(result));
            res.send(JSON.stringify(result));
            res.end();
        }
        catch (err) {
            res.status(500).json({ message: err.message });
        }
    }));
}
// Getting One
function getOne(router) {
    router.get('/user/:id', (req, res) => __awaiter(this, void 0, void 0, function* () {
        try {
            // let id: string = req.params.id
            let con_ = yield sql_connection_1.con;
            const result = yield con_.query("SELECT * FROM " + mytable + " WHERE id = " + req.params.id);
            res.send(JSON.stringify(result));
            res.end();
        }
        catch (err) {
            res.status(500).json({ message: err.message });
        }
    }));
}
// Creating One
function createOne(router) {
    router.post('/user', urlEncoded, jsonParser, (req, res) => __awaiter(this, void 0, void 0, function* () {
        try {
            const { firstname, lastname, age } = req.body;
            let con_ = yield sql_connection_1.con;
            const sqlStr = `INSERT INTO ${mytable} (firstname, lastname, age)
                VALUES ('${firstname}', '${lastname}', ${age})`;
            console.log(sqlStr);
            const result = yield con_.query(sqlStr);
            res.status(201).send(JSON.stringify(result));
            res.end();
        }
        catch (err) {
            res.status(400).json({ message: err.message });
        }
    }));
}
// Updating One
function patch(router) {
    router.patch('/user/:id', urlEncoded, jsonParser, (req, res) => __awaiter(this, void 0, void 0, function* () {
        try {
            const { firstname, lastname, age } = req.body;
            let con_ = yield sql_connection_1.con;
            const sqlStr = `UPDATE ${mytable} 
                SET firstname = '${firstname}', lastname = '${lastname}', age = ${age}
                WHERE id = ${req.params.id}`;
            console.log(sqlStr);
            const result = yield con_.query(sqlStr);
            res.status(201).send(JSON.stringify(result));
            res.end();
        }
        catch (err) {
            res.status(400).json({ message: err.message });
        }
    }));
}
// Deleting One
function delete_(router) {
    router.delete('/user/:id', (req, res) => __awaiter(this, void 0, void 0, function* () {
        try {
            // let id: string = req.params.id
            let con_ = yield sql_connection_1.con;
            const result = yield con_.query("DELETE FROM " + mytable + " WHERE id = " + req.params.id);
            res.send(JSON.stringify(result));
            res.end();
        }
        catch (err) {
            res.status(500).json({ message: err.message });
        }
    }));
}
function routeUser(router) {
    getAll(router);
    getOne(router);
    createOne(router);
    patch(router);
    delete_(router);
}
exports.routeUser = routeUser;
