// person.class.js
exports.Person = function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  
    this.getFullName = function() {
      return this.firstName + ' ' + this.lastName;
    };
  };
  
  exports.PI = 3.14;
  
  exports.ONE = 1;