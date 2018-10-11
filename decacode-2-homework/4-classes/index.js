const path = require('path');
const fs = require('fs');

const pathToDB = path.resolve(__dirname, 'products.csv');
const pathToJSON = path.resolve(__dirname, 'result.json');

const items = fs.readFileSync(pathToDB, 'utf8').split(', ');

const exRate = 67.35;

const Product = function(str) {
    const value = str.split(' ');
    this.title = value[1];
    this.price = {
        'rubles':Number(value[0]),
        'dollars':Number((Number(value[0])/exRate).toFixed(2))
    };
};

const productList = items.map(item => new Product(item));
const productJSON = JSON.stringify(productList);

fs.writeFileSync(pathToJSON, productJSON, 'utf8');