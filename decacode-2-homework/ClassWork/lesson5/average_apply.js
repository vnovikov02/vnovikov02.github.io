function average() {
    // convert arguments to array:
    const args = [].slice.call(arguments);
    // calc and return average
    return args.reduce((acc, x) => acc + x, 0) / args.length;
}

console.log(average(1, 2, 3, 4, 5));