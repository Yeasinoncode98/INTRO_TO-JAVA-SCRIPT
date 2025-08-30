// Normal system
const numbers = [4, 3, 2, 3, 45, 5];
// const doubled = [];

// for (const number of numbers) {
//   const result = number * 2;
//   doubled.push(result);
// }

// console.log(doubled);

// map system not a part of ES6

// ...................................................

// Calling through a property or variable
// arrow function

// const doubleit = (x) => x * 2;
// const doubled = numbers.map(doubleit);

//

//Direct used the inner work of the function  inside the map function
const doubled = numbers.map((x) => x * 2);
const fiveTimes = numbers.map((x) => x * 5);
const square = numbers.map((x) => x * x);
const friends = ["javed", "kovel", "nobel", "kodbel"];

// Console Area
console.log(doubled);
console.log(fiveTimes);
console.log(square);

// Trying for String Area Can be get by Object

const nameLen = friends.map((name) => name.length);
const firstletters = friends.map((name) => name[0].toUpperCase());

// Console Area
console.log(nameLen);
console.log(firstletters);

// For doing Multi Line

const result = numbers.map((num, index) => {
  console.log(num * index);
  return index;
});

console.log(result);
