// scope -->Means--> (area)
//3 types of  scope

// 1.Global scope
// 2.function or local scope
// 3.Block scope

// Global scope
let test = "test";
if (true) {
  console.log(test);
}

//Block scope
// var not maintains block scope
//let and const die baire call kora possible nah
{
  let test2 = "test 2";
  var test3 = "test 3";
}

console.log(test3);

// function or local scope
// var,let,const all are maintaining function scope
const myFunc = () => {
  var test44 = "test 33";
  let test44 = "test 44";
  const test444 = "test 444";

  // global accidental variable
  test555 = "test 555"; //x bad practice (not recommended)
};

// console.log(test33);
myFunc();
// console.log(test555);
