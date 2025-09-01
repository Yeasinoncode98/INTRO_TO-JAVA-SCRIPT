/**
 * undefined ---> not defined
 *
 *
 */

let money;

// console.log(money);

function total(a, b) {
  //   console.log("Value of parameters", a, b);
  const sum = a + b;
  //   console.log("Total is ", sum);
  //   return sum;
}

// total(2);
const result = total(5, 7);
// console.log("Value of function call", result);

//

function total2(a, b) {
  //   console.log("Value of parameters", a, b);
  const sum = a + b;
  if (a === undefined || b === undefined) {
    return;
  }
  if (a && b) {
    const sum = a + b;
  }
  return sum;
}

const result2 = total2(1);
// console.log("Result2", result2);

// object
const phone = {
  brand: "Iphone",
  price: 30000,
};

// console.log(phone.color);

// Array
const banks = ["Sonali", "Ripali", "Jomuna"];
// console.log(banks[3]);
delete banks[1];
console.log(banks);

console.log("Type of Undefined", typeof undefined);

// Null
// Never set any element value to Undefined
console.log("Type of Null", typeof null);

// Null is setted intentionaly  by the developer
