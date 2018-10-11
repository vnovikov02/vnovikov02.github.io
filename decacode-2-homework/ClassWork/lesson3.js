// console.log(isOdd(process.argv[2]));

function isOdd(number) {
    return number % 2 === 0;
}


function addInside(x) {
    return function(y) {
        return x + y;
    }
}

const addInside2 = (x) => (y) => x + y;



function add(x, y) {
    return x + y;
}

const addModern = (x, y) => x + y;


// console.log(addModern(2, 3));
// console.log(add(2, 3));

//function that counts calls of itself
//obvious option:
// let callCount = 1

// function counter() {
//     return callCount++
// }

//right option:

function createCounter() {
    let count = 0;
    return function() {
        return count++;
    };
}

//now we can create 2 or more separate counters
const counter = createCounter();
const counter2 = createCounter();

counter();
counter();
counter();
counter();
// console.log(counter());

//array methods: map
let numbers = [1, 2, 3, 4, 5];
numbers = numbers.map((number) => number + 1);
//console.log(numbers); // [2, 3, 4, 5, 6]

//old school view:
// numbers = numbers.map(function(number) {
//     return number + 1;
// });

//array methods: filter
numbers = numbers.filter((number) => number % 2 === 0);

//array methods: find
let result = numbers.find((number) => number === 4);

//array methods: includes
let result2 = numbers.includes((number) => number === 1);

//array methods: reduce
let result3 = numbers.reduce((acc, number) => acc + number, 0);
//console.log(result3); //15

let numbers2 = [1, 2, 3, 4, 5];

function sumOdd(arr) {
   return arr
    .filter((n) => n % 2 === 0)
    .reduce((acc, n) => acc + n, 0);
}

console.log(sumOdd(numbers2)); //6