module.exports = function(firstName, lastName){
    
    this.hasAccess = false;
    this.firstName = firstName;
    this.lastName = lastName;
    this.isLoggedIn = false;

    this.login = function() {
       if (this.hasAccess === true) this.isLoggedIn = true;
    }

    this.logout = function() {
        this.isLoggedIn = false;
    }

};