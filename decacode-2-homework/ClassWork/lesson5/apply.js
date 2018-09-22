function greetUser(greeting) {
    console.log(greeting + this.firstName + ' ' + this.lastName);
  }

// object user will become the context of the function
  const user = { firstName: 'Jaimes', lastName: 'Johnson' };
// use call with limited number of elements, works faster
  greetUser.call(user, 'Hello, '); // "Hello, Jaimes Johnson"
// use apply with unknown number of elements in array
  greetUser.apply(user, ['Hello, ']); // "Hello, Jaimes Johnson"