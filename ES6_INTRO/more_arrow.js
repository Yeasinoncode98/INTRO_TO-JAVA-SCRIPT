const getTax = (amount, textrate) => (amount * taxRate) / 100;
const add = (p, q) => p + q;

// Single Parameter

const getSquare = (x) => x * x;
console.log(getSquare(8));

// Single parameter without Parenthesis
const getHalf = (num) => num / 2;
console.log(getHalf(18));

// Array Arrow function
const firstElement = (nums) => nums[2];
console.log(firstElement([1, 23, 4]));

// Blank Arrow function

const logIt = () => console.log(78);

logIt();

// Anonymous function
// no parameter

// document.getElementById("").addEventListener("click", () => {});

// Example................
// document.getElementById("btn-click").addEventListener("click", (event) => {});

// Anonymous function without any parameter

//  () =>{}
