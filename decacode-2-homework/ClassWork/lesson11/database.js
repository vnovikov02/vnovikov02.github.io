const fs = require('fs');
const path = require('path');

const pathToJSON = path.resolve(__dirname, 'index.json');

const db = {
    get: callback => {
        fs.readFile(pathToJSON, 'utf8', (err, contents) => {
            callback(JSON.parse(contents));
        });
    },
    save: data => {},
    update: (id, data) => {},
    remove: id => {},
};

module.exports = db;