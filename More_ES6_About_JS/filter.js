const numbers = [1, 5, 16, 10, 45, 2, 7];

// ---> filter hocche chck kore je condition er sathe mile kina ado
// --->Mille true dibe
// ---> True hole dibe naile dibe na faka array dibe or anything dibe

const greaterThan10 = numbers.filter((x) => x > 10);
console.log(greaterThan10);

const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log(evenNumbers);
