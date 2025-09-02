// Var hoisted (Bad Practice)
// let and const hoisted but in temporal dead zone
console.log(test3);
var name = "Yeasin";

let age = 25;
// const roll = 29;
age = 30;
console.log(age);

// const
const roll = 29;
console.log(roll);

// scope
{
  // block scope
  var test = "demo";
  let test2 = "demo2";
}

console.log(test);
// console.log(test2);

// Function scope or local scope,block scope,function or local
function myFunc() {
  var test3 = "Test3";
  let test4 = "Test4";
}

myFunc();

// Hoisting
console.log(test5);
var test5 = "test5";
