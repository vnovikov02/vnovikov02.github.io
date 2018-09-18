const path = require('path');
const fs = require('fs');

const pathToJSON = path.resolve(__dirname, 'index.json');
const pathToCSV = path.resolve(__dirname, 'index.csv');

const data = fs.readFileSync(pathToJSON, 'utf8');
const users = JSON.parse(data);
const names = users.map(user => user.name);
const content = names.join(', ');

fs.writeFileSync(pathToCSV, content, 'utf8');

// your code...