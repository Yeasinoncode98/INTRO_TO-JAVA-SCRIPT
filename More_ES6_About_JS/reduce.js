const numbers = [4, 5, 6, 7, 12, 45];

let sum = 0;

// for (const num of numbers) {
//   sum = sum + num;
// }

// Done With Reduce

const total = numbers.reduce((acc, cur) => acc + cur, 0);
console.log(total);
