var arrOutput = [];
var sum = 0;

for (var i = 2; i<process.argv.length; i++){

    arrOutput.push(parseInt(process.argv[i]));
    sum += parseInt(process.argv[i]);
    
}

var average;
average = sum/(arrOutput.length);

console.log(arrOutput);
console.log('Сумма: '+ sum);
console.log('Среднее значение: '+ average.toFixed(2));