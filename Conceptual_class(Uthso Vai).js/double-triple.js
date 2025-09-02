// ==
// ===

// == (loose equality) --> only chck value not data type
// 2.Behind the scene type coertion

let num = 5;
let num2 = "5";

// only chck value
console.log(num == num2);

// Chck both value and data type both
console.log(num === num2);
