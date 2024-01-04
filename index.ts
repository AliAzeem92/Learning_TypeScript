// Program to find the the sum of 10, 20 by function. But the result must be "50". And add '5' after calculation

function sum(num1: number, num2: number) {
  var result: number = num1 + num2;
  return result;
}

var sumValue: number = sum(10, 20);
sumValue += 5;
console.log("Sum is", sumValue);

// Program to find the the sum of 30, 20 by function. But the result must be "50". And add '40' after calculation

var sumValue2: number = sum(30, 20);
sumValue2 += 40;
console.log("sum is", sumValue2);
