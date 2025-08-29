// function declaration

function add(num1, num2) {
  return num1 + num2;
}

// function expression

const addition = function (num1, num2) {
  return num1 + num2;
};

const result = addition(10, 10);
// console.log(result);

// arrow function
const add2 = (num1, num2) => num1 + num2;
console.log(add2(10, 20));

// Arrow function

const multiply = (a, b) => a * b;
console.log(multiply(5, 7));

// Arrow Function
const sumAll = (a, b, c, d, e, f) => a + b + c + d + e + f;
console.log(sumAll(1, 2, 3, 4, 5, 6));

//Arrow function
const isFirstBig = (x, y) => x > y;
console.log(isFirstBig(10, 15));

// Multi-line arrow function

const doMath = (x, y) => {
  const makeDouble = x * 2;
  const againDouble = y * 2;
  const result = makeDouble + againDouble;
  return result;
};

console.log(doMath(20, 10));
