const fs = require('fs');
const path = require('path');

const pathToJSON = path.resolve(__dirname, 'index.json');

const db = {
    get: callback => {
        fs.readFile(pathToJSON, 'utf8', (err, contents) => {
            callback(JSON.parse(contents));
        });
    },
    
    save: (addItem, callback) => {
        fs.readFile(pathToJSON, 'utf8', (err, contents) => {
            const data = JSON.parse(contents);
            
            data.push(Object.assign({}, addItem));
    
            fs.writeFile(pathToJSON, JSON.stringify(data, '', 2), 'utf8', (err, contents) => {
                callback(addItem);
            });
        });
    },

    update: (id, updItem, callback) => {
        fs.readFile(pathToJSON,'utf-8',(err,contents)=>{
            const data = JSON.parse(contents);
            const targetID = data.findIndex(el => el.id == id);
             targetID >= 0 ? data.splice(targetID, 1, updItem) : false;
             fs.writeFile(pathToJSON, JSON.stringify(data, '', 3), 'utf8', (err, result) => {
                callback(JSON.stringify(updItem, '', 3));
            });
        });
    },

    remove: (id, callback) => {
        fs.readFile(pathToJSON, 'utf8', (err, contents) => {
            const data = JSON.parse(contents);
            const updatedData = data.filter(el => el.id !== id)
    
            fs.writeFile(pathToJSON, JSON.stringify(updatedData, '', 2), 'utf8', (err, contents) => {
                callback(`Deleted item: id=${id}`);
            });
        });
    },
};

module.exports = db;