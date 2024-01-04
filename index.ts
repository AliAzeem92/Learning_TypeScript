// Concept of "Var Let Const"

// Value of "var & let" can be change. But the value of "const" cannot be changed.

var valueOfVar: number = 23;
valueOfVar = 50;
console.log(valueOfVar);

let valueOfLet: string = "Hello";
valueOfLet = "hi";
console.log(valueOfLet);

const valueOfConst: number = 29;
// valueOfConst = 30;(Shows error)

//"All of them are not accessable out side the funtion"

function checking() {
  var varFun: number = 20;
  let letFun: number = 30;
  const constFun: number = 40;
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
  var varF: string = "Var";
  let letF: string = "Let";
  const constF: string = "Const";
}

console.log(varF);
// console.log(letF);
// console.log(constF);
// Shows error
