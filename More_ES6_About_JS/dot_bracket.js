const student = {
  name: "Rafid",
  1: 50,
  "home-address": "kochuket",
  marks: 50,
};

// dot notation
const studentNAme = student.name;

// Bracket Notation
const studentName2 = student["name"];

const okay = student["home-address"];
console.log(okay);

for (const key in student) {
  const value = student[key];
}

const propName = "marks";
// console.log(student[propName]);

// adding location in object newly
// student.location = "Dhaka";
// console.log(student);
