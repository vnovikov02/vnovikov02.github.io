const fs = require('fs');
const path = require('path');

const pathToFile = path.resolve(__dirname, 'index.json');

fs.readFile(pathToFile, 'utf8', (error, contents) => {console.log(contents, error);
});