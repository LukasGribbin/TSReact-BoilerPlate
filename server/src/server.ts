import * as express from 'express'
import path = require('node:path');
import {exampleCrud} from './routes/example-crud';

const app = express()

exampleCrud(app);


// Static files handler
app.get('/(*.jpg)|(*.svg)|(*.png)', (req, res) => {
    var fileName = req.url;
    //res.end()
    const file = path.join(__dirname, '/../static/', fileName);
    console.log(file);

    res.sendFile(file, { maxAge: '30d' })
});

// Static files handler
app.get('/(*.css)|(*.js)|(*.txt)|(*.xml)', (req, res) => {
    var fileName = req.url;
    const file = path.join(__dirname, '../', fileName);
    console.log(file);
    res.sendFile(file, { maxAge: '5m' });
});


// Static files handler
app.get('/', (req, res) => {
    //res.end()
    const file = path.join(__dirname, '/../static/index.html');
    console.log(file);

    res.sendFile(file)
});


app.listen(3000, () => console.log('Server Started'))