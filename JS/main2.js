
// var a = parseInt(prompt('введите a'));

// if (a > 10) {
//     alert('a больше 10');
// }
// else if (a == 10) {
//     alert('a равно 10');
// }
// else if (a < 10) {
//     alert('a меньше 10');
// }
// else {
//     alert('a не является числом')
// }

var a;
a = 3;

var b;
b = myFunctionName(a); // call the function with a as an argument

console.log(b);

function myFunctionName(param1) {
    return param1 ** 2;
}

//input validation for numbers
//isNaN parseInt('222') //must be false if it's actually a number
