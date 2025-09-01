// aLL Primitive values (number,string,boolean,undefined,null) Always pass by Value

function multiply(x, y) {
  x = x + 5;
  y = y + 5;
  const mult = x * y;
  return mult;
}

const a = 5;
const b = 7;
console.log("before the fucntion call", a, b);

const result = multiply(a, b);
console.log(result);
console.log("After the fucntion call", a, b);

// Object,Array are passed by reference (Non _ Primitive Values)

const manik = {
  name: "manik",
  balance: 5000,
};

const roton = {
  name: "Roton",
  balance: 40000,
};

console.log("before call", manik, roton);

function totalbalance(person1, person2) {
  person1.balance = 0;
  person2.balance = person2.balance / 2;
  const total = person1.balance + person2.balance;
  return total;
}

const balance = totalbalance(manik, roton);
console.log("Balance", balance);

console.log("After function call", manik, roton);
