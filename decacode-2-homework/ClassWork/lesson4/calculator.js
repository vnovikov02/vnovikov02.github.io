const calc = {
    firstValue: 0,
    secondValue: 0,
    read: function(a, b) {
        this.firstValue = a;
        this.secondValue = b;
        return this;
    },
    sum: function() {
        return this.firstValue + this.secondValue;
    },
    mul: function() {
        return this.firstValue * this.secondValue;
    },
  };

  calc.read(10, 5);

  const result = calc.read(10, 5).sum();

  console.log(result);

//   console.log(calc.sum()); // 15
//   console.log(calc.mul()); // 50