const sum = (a, b) => a + b; //Implicit return kore
console.log(sum(5, 8));

// square

const sqrt = (x) => x * x;
console.log(sqrt(5));

//

function multi(a, b) {
  return a * b;
}

console.log(multi(5, 5));

// optional

function myFuncNormal() {
  console.log(this);
}

myFuncNormal();

// Arrow
const myFuncArrow = () => {
  console.log(this);
};
myFuncArrow();
