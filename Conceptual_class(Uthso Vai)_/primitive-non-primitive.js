// 2 types data
// 1.primitive => string,number,boolean,undefined,null
// 2.Non-Primitive => array,function,Date,object

// primitive
let age = 38;
let age2 = age;
age2 = 56;

console.log(age);
console.log(age2);

// Non Primitive
const obj = {
  a: 10,
  b: 20,
};

// const obj2 = obj; //assigned ref or location

const obj2 = { ...obj }; //Created a independent spread operator
obj2.a = 50;

console.log(obj);
console.log(obj2);
