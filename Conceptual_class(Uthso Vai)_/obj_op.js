// let name = "Yeasin";
// let age = 29;

// let person = {
//   name,
//   age: 25,
//   roll: 29,
//   getInfo() {
//     console.log(`My name is ${person.name}`);
//   },
// };

// // console.log(person);
// // person.getInfo();

// // Dot notation,bracket-notation,destructuring
// // console.log(person.name);

// // Bracket notation
// const test = "name";
// // console.log(person["name"]);
// // console.log(person[test]);

// //keys
// const keys = Object.keys(person);
// console.log(keys);

// // values
// const values = Object.values(person);
// console.log(values);

// // Entries
// const entries = Object.entries(person);
// console.log(entries);

// // loop iterate - two ways
// // using keys
// for (const key of keys) {
//   console.log(key, ":", person[key]);
// }

// // for in
// for (const key in person) {
//   console.log(key, ":", person[key]);
// }

// seal ,freeze,delete
const obj2 = {
  country: "Bangladesh",
  color: "Green",
};

// delete
// delete obj2.color;

// freeze
Object.freeze(obj2);

// console.log(obj2);

// seal
Object.seal(obj2);
delete obj2.color;
obj2.country = "uganda";
obj2.test = "test";
console.log(obj2);
