// rest and spread operator

// Rest operator
const findMax = (...rest) => {
  //   console.log(rest);
  const max_number = Math.max(...rest);
  return max_number;
};

// const arr = [10, 239, 30, 89, 90];

console.log(findMax(10, 90, 29, 39, 23, 12, 23, 1000));

//

// const arr = [10, 20, 39, 39];
// console.log(Math.max(...arr)); //Spread operator

// Object
const obj = {
  name: "Yeasin",
  age: 21,
};

const obj2 = { ...obj }; //copy independently
obj2.age = 30;
console.log("object2", obj2);
console.log("object", obj);
