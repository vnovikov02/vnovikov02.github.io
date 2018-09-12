const path = require('path');
const fs = require('fs');

const pathToJSON = path.resolve(__dirname, 'index.json');
const fileContent = fs.readFileSync(pathToJSON, 'utf8');

let dataParsed = JSON.parse(fileContent)

//Count users number
let usersCount = dataParsed.length
console.log('Количество пользователей: ' + usersCount);

//Print average age of all users
let ageSum = Object.values(dataParsed).reduce((acc, n) => acc + n.age, 0);
let ageAverage = (ageSum / usersCount).toFixed(2);

console.log('Средний возраст пользователей: ' + ageAverage);

//List all users in format "age name" as a string
let formattedList = dataParsed.map((user) => {
    return user.age + ' ' + user.name;
}).join(', ');

console.log(formattedList)

//List all users with 'paint' skill in an array
let filteredList = dataParsed.filter((user) => user.skills.includes('Paint')).map((user) => user.name);

console.log(filteredList);