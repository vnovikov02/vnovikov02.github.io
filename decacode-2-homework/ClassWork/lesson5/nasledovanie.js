function Machine() {
    let enabled = false;
    this.enable = function() { enabled = true; };
    this.disable = function() { enabled = false; };
    this.isEnabled = function() { return enabled; };
  }

  function Car() {
    Machine.apply(this, arguments); //наследование
    this.type = 'BMW';
  }

  const car = new Car();
  car.enable();
  console.log(car.isEnabled()); // true
  console.log(car.type); // "BMW"