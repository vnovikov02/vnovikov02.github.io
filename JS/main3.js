/*
//Объекты

var user = {
    name: 'Egor',
    lastName: 'Yakovishen',
    sayHello: function() {
        var myName = this.name + ' ' + this.lastName
        alert('привет, my name is ' + myName);
    }
};

// window.user


user.name // обращение к свойству `name` объекта `user`
user.lastName // обращение к свойству `lastName` объекта `user`
user.sayHello() // вызов функции `sayHello` объекта `user`

//запись
user.name = 'Ivan';
user.lastName = 'Petrov'
*/

//Глобальная переменная

/*
var myName = 'smth'; //Global as not inside a function

function myFunc() {
    var a = 123; //Local, inside a function
    alert(myName); //can be seen outside a function
}
*/

var cities = [
    'Moscow',
    'Berlin',
    'Paris',
    'New York',
    'Tokyo',
];

var list = document.querySelector('.list');

for (var i = 0; i <= (cities.length - 1); i++) {
var listItem = document.createElement('li'); // <li></li>
listItem.textContent = cities[i]; // <li>Moscow</li>
list.appendChild(listItem); // <ul>...<li>Moscow</li></ul>
};

//Находим на страницу кнопку с классом "add"
var btn = document.querySelector('.add');

//создаем функцию-обработчик
function addCity() {
    var newCity = prompt('Введите название города');
    var listItem = document.createElement('li');
    listItem.textContent = newCity;
    list.appendChild(listItem);
};


//Добавляем обработчик события "click" на этой кнопке
btn.addEventListener('click', addCity);

//обработчик нажания клавиши А
document.addEventListener('keydown', function (ev) {
    if (ev.keyCode === 65) {
        addCity();
    };
});


list.addEventListener('mouseover', function () {
    list.classList.add('highlight');
});

list.addEventListener('mouseout', function () {
    list.classList.remove('highlight');
});

var btnShow = document.querySelector('.show');
var btnHide = document.querySelector('.hide');

btnShow.addEventListener('click', function () {
    list.style.display = 'block';
});
btnHide.addEventListener('click', function () {
    list.style.display = 'none';
});