"use strict";
// Write a program which calculate sum of even numbers from 0-100 & make lish of even numbers and print with sum.
var num = 0;
var list = [];
for (let index = 0; index <= 1000; index++) {
    if (index % 2 == 0) {
        num = num + index;
        list.push(index);
    }
}
console.log(num);
console.log(list);
