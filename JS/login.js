var userName = prompt('Введите имя пользователя');

if (userName == '' || userName == null) {
    alert('Логин обязательно должен быть указан');
}
else {
    var userPass = prompt('Введите пароль');
    if (!userPass) {
        alert('Пароль обязательно должен быть указн');
    }
    else if (userName == 'admin' && userPass == 'qwerty123456') {
        alert('Добро пожаловать, администратор!');    
    }
    else if (userPass != 'qwerty123456' && userName == 'admin') {
        alert('Неправильный пароль')
    }
    else if (userPass == 'qwerty123456' && userName != 'admin') {
        alert('Неправильное имя пользователя')
    }
    else {
        alert('Некорректные данные для входа')
    }
}

