"use strict";
// Built-in Fuctions
var studentName = ["Ali", "Zain", "Raheeq", "Zair"];
// To add new Variable at the end of array
function addStudentName(addName) {
    studentName[studentName.length] = addName;
}
addStudentName("Umar");
addStudentName("Naveed");
addStudentName("Azeem");
addStudentName("Mushayit");
addStudentName("Muneeb");
console.log(studentName);
