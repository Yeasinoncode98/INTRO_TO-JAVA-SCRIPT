const numbers = [87, 8, 5, 91, 1110];
// console.log(numbers);

// console.log(...numbers);

// Highest Number here
// const max = Math.max(21, 56, 94, 112, 54, 1123);

const max = Math.max(...numbers);
// console.log(max);

// Array changing elements

// const first = [1, 2, 3, 4, 5];
// const second = first;

// second.push(6);
// console.log(first);

// ................................................

const first = [1, 2, 3, 4, 5];
const second = [...first];
const third = [9, ...first, 97, 89, 98];
second.push(6);
// console.log(third);

const ages = [35, 45, 37];
const prices = [98, 98, 98];
const all = [...ages, 999, ...prices];
console.log(all);

// Object

const person = {
  name: "Yeasin",
  age: 25,
};

const employee = { designation: "developer", ...person };

console.log(employee);

// function

const total = (a, b, c) => a + b + c;
const result = total(1, 2, 3);
const digits = [78, 55, 66];

// total(...digits);
//
