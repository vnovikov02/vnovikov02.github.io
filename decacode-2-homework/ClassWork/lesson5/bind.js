
  function greet() {
    console.log(this);
  }

  //bind returns a function with a defined context
  const g = greet.bind('Hello!');
  g(); // "Hello!"

  //Carrying:

  function mul(a, b) {
    return a * b;
  }

  const double = mul.bind(null, 2);
  double(3); // mul(2, 3); -> 6

  console.log(double(3));

  //bind context to a function
  const user = {
    name: 'Michael',
    login: function() {
      const greet = function() {
        console.log('User ' + this.name + ' logged!');
      };
  
      const bindedGreet = greet.bind(this);
  
      setTimeout(bindedGreet, 1000);
    }
  };
  
  user.login(); // "User undefined logged!"