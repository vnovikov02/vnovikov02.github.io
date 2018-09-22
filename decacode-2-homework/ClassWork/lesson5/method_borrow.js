//if there is an 'arguments' array (which is not actually an array, but a look-alike object),
//we may use method borrowing:

function printArgs() {
    // arr.slice() copies all arguments
    const args = [].slice.call(arguments);
    console.log(args.join(' '));
  }

  printArgs('Hello', 'whole', 'new', 'world');
  // Hello whole new world