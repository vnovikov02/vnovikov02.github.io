// index.js
const personModule = require('./person.class2');
console.log(personModule);

const Person = personModule.Person;

const person = new Person('Tim', 'Heidecker');

console.log(person.getFullName());
// Tim Heidecker