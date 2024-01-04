// Arrow Function

var arrowFun = (num1: number, num2: number) => {
  //   var num1: number = 2;
  //   var num2: number = 5;
  var result: number = num1 + num2;
  return result;
  console.log(result);
};

var sunArrow: number = arrowFun(2, 5);
sunArrow += 3;
console.log(sunArrow);
