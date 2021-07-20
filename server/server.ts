import * as express from 'express'
import {routeUser} from './routes/users'


//const router = express.Router();

const app = express()

//userRouter.get('/aaa')

//app.use("/user", userRouter)


routeUser(app);


// Static files handler
app.get('/(*.jpg)|(*.svg)|(*.png)', (req, res) => {
    var fileName = req.url;
    //res.end()
    const file = __dirname + '/static/' + fileName;
    console.log(file);

    res.sendFile(file, { maxAge: '30d' })
});

// Static files handler
app.get('/(*.css)|(*.js)|(*.txt)|(*.xml)', (req, res) => {
    var fileName = req.url;
    res.sendFile(__dirname + '/' + fileName, { maxAge: '5m' });
});


// Static files handler
app.get('/', (req, res) => {
    //res.end()
    const file = __dirname + '/static/index.html';
    //console.log(file);

    res.sendFile(file)
});


app.listen(3000, () => console.log('Server Started'))