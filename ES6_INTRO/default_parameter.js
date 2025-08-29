// Default parameter

function sum(num1 = 0, num2 = 0) {
  const total = num1 + num2;
  console.log(num1, num2, total);
}

// sum(10);
// sum(10, 40);

// num1,num2 parameter

// last e call korar shomoi je man ba value ditesi egula hocche argument

// NaN --> Not a number

function multiply(num1 = 1, num2 = 1) {
  const result = num1 * num2;
  console.log(result);
}

multiply(10);

/**
 * some thumbrule of default value may be useful
 *
 *
 * add --> 0
 *
 *
 *
 * multiply --> 1
 * subtract --> 0
 *
 *
 * string -->""
 *
 *
 *Array --> []
 */

function fullName(first, last = "") {
  const name = first + "" + last;
  console.log(name);
}

fullName("Wahiduzzaman");
