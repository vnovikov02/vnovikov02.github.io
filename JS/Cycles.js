/*
// Cycle 'while'
(function() {

var i = 5;

while (i >= 0) {
    console.log(i);
    i--;
}

//Cycle 'for'
    
for (var i = 5; // Начальное значение
    i >= 0;     // условие продолжения цикла
    i--         // изменение счетчика
) {
        console.log(i);
}
    
})()

*/

/*
(function() {

for (var i = -11;
    i <= 11;
    i++
) {
    if(i % 2 == 0) {
    console.log(i + ' - четное');
    }
    else {
    console.log(i + ' - нечетное');  
    }
}

})()
*/

// вложенные циклы
/*
for (var i = 0; i <= 9; i++) {
    for (var j = 0; j <= 9; j++) {
      console.log('i * j = ' + i * j);
    }
  }
*/


// Массивы
/*
var cities = [
    'Moscow',   // 0
    'Berlin',   // 1
    'Paris',    // 2
    'New York', // 3
    'Tokyo',    // 3
];

cities.push('Munich');

//cities.length //длина массива

for (var i = 0; i < cities.length; i++) {
    console.log(cities[i]);
}
*/

//Функции

// 1. Повторное использование
// 2. Инкапсуляция
// 3. Параметры/(аргументы)

/*
function sayHello(name, lastName) {
    if (!name || !lastName) {
        name = 'пользователь';
    }
    var fullName = name + " " + lastName;
    console.log('Hello, ' + fullName + '!');
}

//OR: function sayHello(name = 'Пользователь') - значение по умолчанию

sayHello('Егор', 'Яковишен');
sayHello('Иван', 'Петров');
sayHello();
*/

//задание

function makeLoop(start, end) {
    //обработаем случай, если вдруг старт больше энда
    if (start > end) {
        start = [end, end = start][0];
    }
        for (var i = start; i <= end; i++) {
            if (i % 2 == 0) {
                console.log(i);
            }
        }

}

makeLoop(5, -3);