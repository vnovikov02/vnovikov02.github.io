const express = require('express');
const app = express();
const port = 3000;

const db = require('./database.js');

const fs = require('fs');
const path = require('path');
const pathToJSON = path.resolve(__dirname, 'index.json');

const bodyParser = require('body-parser');
// app.get('/', (request, response) => {
//     response.send('Hello, world!')
// });

// const data = {
//   id: 1,
//   name: 'John',
//   surname: 'Rich'
// };


// app.get('/', (req, res) => {
//     res.setHeader('Content-Type', 'application/json');
//     res.send(JSON.stringify(/* ??? */));
// });

//Middleware:
//parse body of post request
app.use(bodyParser.json());

//Path logger
app.use((request, response, next) => {
    console.log('Path: ' + request.path);
    response.responseStartTime = Date.now();
    response.setHeader('Content-Type', 'application/json');
    // write to a file:
    // fs.readFile('logs.txt', (err, content) => {
    //     fs.writeFile('logs.txt', content + request.path);
    // })
    next();
});

//GET: http://localhost:3000/genres?offset=1
app.get('/genres', (req, res) => {
    db.get(json => res.send(JSON.stringify(json)));
});

//POST: http://localhost:3000/genres
app.post('/genres', (req, res) => {
    console.log(req.body);
    fs.readFile(pathToJSON, 'utf8', (err, contents) => {
        const data = JSON.parse(contents);
        //data.push(req.body); //same as concat

        data.push(Object.assign({}, req.body, {bands: ['Rolling Stones']}));

        //const updatedData = data.concat([req.body]);
        fs.writeFile(pathToJSON, JSON.stringify(data, '', 2), 'utf8', (err, contents) => {
            res.send(req.body);
        });
    });
});

//DELETE: http://localhost:3000/genres/11
app.delete('/genres/:id', (req, res) => {
    fs.readFile(pathToJSON, 'utf8', (err, contents) => {
        const data = JSON.parse(contents);
        const updatedData = data.filter(el => el.id !== req.params.id)

        //const updatedData = data.concat([req.body]);
        fs.writeFile(pathToJSON, JSON.stringify(updatedData, '', 2), 'utf8', (err, contents) => {
            res.send(JSON.stringify({result: 'OK'}));
        });
    });
});

app.listen(port, () => {
    console.log(`App listening on port ${port}!`)
});