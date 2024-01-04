"use strict";
// Concept of "Var Let Const"
// Value of "var & let" can be change. But the value of "const" cannot be changed.
var valueOfVar = 23;
valueOfVar = 50;
console.log(valueOfVar);
let valueOfLet = "Hello";
valueOfLet = "hi";
console.log(valueOfLet);
const valueOfConst = 29;
// valueOfConst = 30;(Shows error)
//"All of them are not accessable out side the funtion"
function checking() {
    var varFun = 20;
    let letFun = 30;
    const constFun = 40;
}
// console.log(varFun);
// console.log(letFun);
// console.log(constFun);
// (Shows error)
// var = 50
// let = 60
// const = 70
// (Shows error)
// "Var is accessable out side any block(Like if statement block) if it's not fuction funtion block but 'Let & Const' are still not accessable"
{
    var varF = "Var";
    let letF = "Let";
    const constF = "Const";
}
console.log(varF);
// console.log(letF);
// console.log(constF);
// Shows error
