// Write a program which calculate sum of even numbers from 0-100 & make lish of even numbers and print with sum.
var num: number = 0;
var list: number[] = [];
for (let index = 0; index <= 100; index++) {
  if (index % 2 == 0) {
    num = num + index;
    list.push(index);
  }
}
console.log(num);
console.log(list);
