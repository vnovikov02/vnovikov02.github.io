const User = require('./user.class');
const Admin = require('./admin.class');

const user = new User('Chester', 'Bennington');
const admin = new Admin('Steve', 'Jobs');

user.login();
admin.login();

console.log(user);
console.log(admin);