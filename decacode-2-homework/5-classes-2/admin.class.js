const User = require('./user.class');

module.exports = function(){
    User.apply(this, arguments);
    this.hasAccess = true;
};