"use strict";
// Arrow Function
var arrowFun = (num1, num2) => {
    //   var num1: number = 2;
    //   var num2: number = 5;
    var result = num1 + num2;
    return result;
    console.log(result);
};
var sunArrow = arrowFun(2, 5);
sunArrow += 3;
console.log(sunArrow);
