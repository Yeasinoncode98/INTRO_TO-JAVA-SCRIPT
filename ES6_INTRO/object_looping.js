const numbers = [1, 2, 54, 1, 4, 9];

for (const number of numbers) {
  console.log(number);
}

// Array er jnno for of loop

// Object er jnno hocche for in loop

const employee = {
  name: "raja rani",
  designation: "QA",
  salary: 20000,
  experience: 1,
  age: 22,
};

for (const key in employee) {
  const value = employee[key];
  console.log(key, value);
}

const keys = Object.keys(employee);
console.log(keys);

for (const key of keys) {
  const value = employee[key];
}


