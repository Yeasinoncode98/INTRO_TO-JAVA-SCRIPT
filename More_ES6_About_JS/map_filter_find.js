const students = [
  {
    id: 1,
    name: "Abul",
    marks: 50,
  },
  {
    id: 2,
    name: "Qudbul",
    marks: 85,
  },
  {
    id: 3,
    name: "SAbul",
    marks: 95,
  },
  {
    id: 4,
    name: "DAbul",
    marks: 15,
  },
];

// Map

const names = students.map((student) => student.marks - 2.5);
console.log(names);

// Sum of marks
let all = 0;
const sum = students.forEach((student) => {
  all = all + student.marks;
});
console.log(all);

// Filter

const highMarks = students.filter((student) => student.marks > 60);
console.log(highMarks);

// Find
const highMarks1st = students.find((student) => student.marks > 60);
console.log(highMarks1st);
