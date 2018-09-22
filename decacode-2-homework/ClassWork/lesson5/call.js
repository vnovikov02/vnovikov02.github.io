function greetUser(greeting) {
    console.log(greeting + this.firstName + ' ' + this.lastName);
  }

  const user = { firstName: 'Jaimes', lastName: 'Johnson' };

  //we can call function with several parameters; first one will be the "content" of the function
  //and the second will become the function's argument:
  
  greetUser.call(user, 'Hello, '); // "Hello, Jaimes Johnson"