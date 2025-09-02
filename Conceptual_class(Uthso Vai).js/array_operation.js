const arr = [10, 210, 303, 45, 70, 90, 80];

// // for of

// for (const array of arr) {
//   console.log(array);
// }

// for each -->for array
arr.forEach((array) => {
  console.log(array);
});

// map --for array

const updatedArr = arr.map((array) => array + 5);
console.log(updatedArr);

// filter
const adultStd = arr.filter((array) => array >= 18);
console.log(adultStd);

// find
const findThirty = arr.find((array) => array >= 20);
console.log(findThirty);

// reduce

const sum = arr.reduce((acc, cur) => {
  return acc + cur;
}, 0);

console.log(sum);


