const student = {
  name: "Rafid",
  1: 50,

  family: {
    title: "Bhuiyah",
    // mother: {
    //   name: "NurJahan",
    //   age: 45,
    // },
  },

  "home-address": "kochuket",
  marks: 50,
};

// ? optional chain jodi kono
//  value er man khuje na pai taile tkhn e break korbe ebong oita tkhn undefined hobe

console.log(student.family.mother?.age);
