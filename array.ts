// Built-in Fuctions

var studentName: string[] = ["Ali", "Zain", "Raheeq", "Zair"];

// To add new Variable at the end of array

function addStudentName(addName: string) {
  studentName[studentName.length] = addName;
}

addStudentName("Umar");
addStudentName("Naveed");
addStudentName("Azeem");
addStudentName("Mushayit");
addStudentName("Muneeb");

console.log(studentName);
