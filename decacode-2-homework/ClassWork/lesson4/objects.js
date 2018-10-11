// Создать объект count
const count = {
    value: 0,
    inc: function() {
      this.value++;
      return this;
    },
    valueOf: function() {
      return this.value;
    }
  };

  count.inc().inc().inc().inc();
  //console.log(count + 100); // 104  



  // Написать программу, считывающую
  // .csv файл с именами и ценами товаров
  // и преобразующую их в объекты

  const fs = require('fs');
  const path = require('path');
  const pathToFile = path.resolve(__dirname, 'food.csv');

  const content = fs.readFileSync(pathToFile, 'utf8');


  const items = content.split(', ');

  const Item = function(str) {
    //100 Milk
    const value = str.split(' '); //'100', 'Milk'

    this.price = Number(value[0]);
    this.title = value[1];
  };

const products = items.map(item => new Item(item))

console.log(products);
//   const items = []; // ...
//   const Item = function(title, price) {
//     // your code...
//   };
//   console.log(content);
  //console.log(items); // [{title: 'Ball', price: 100}]