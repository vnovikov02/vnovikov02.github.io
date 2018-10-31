const express = require('express');
const app = express();
const port = 3000;

const db = require('./database.js');

const fs = require('fs');
const path = require('path');
const pathToJSON = path.resolve(__dirname, 'index.json');

const bodyParser = require('body-parser');

//Middleware:
//parse body of post request
app.use(bodyParser.json());

//Path logger
app.use((request, response, next) => {
    console.log('Path: ' + request.path);
    response.responseStartTime = Date.now();
    response.setHeader('Content-Type', 'application/json');
    next();
});

//GET: http://localhost:3000/items
app.get('/items', (req, res) => {
    db.get(json => res.send(JSON.stringify(json)));
});

//POST: http://localhost:3000/items
app.post('/items', (req, res) => {
    db.save(req.body, newItem => {
        res.send(newItem);
    });
});

//PUT: http://localhost:3000/items/id
app.put('/items/:id', (req, res) => {
    db.update(req.params.id,req.body,(newData) =>{
        res.setHeader('Content-Type','application/json');
        res.send(newData);
    });
});

//DELETE: http://localhost:3000/items/id
app.delete('/items/:id', (req, res) => {
    db.remove(req.params.id,(response) => {
        res.send(response);
    });
});

app.listen(port, () => {
    console.log(`App listening on port ${port}!`)
});