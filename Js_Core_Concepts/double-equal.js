// Triple equal (===) chcks the type and also the data type of variable
// if type is different it will give false value
// if type is same then chcks the value ,if value is same-->True,if value is false -->return false

// Type coersion (Type convert)

/**
 IF one value is  string,another is number : converts string --> number then
 *compare
 */

//  ........................................

/**
 * if one is boolean and another is number . converts booelan to number
 * true --> 1
 * false --> 0
 */

// console.log(2 === 2);
// console.log(2 == "2");
// console.log(2 == "21");
// console.log(1 == 2);
// console.log(1 === "2");
// console.log(true == 1);
// console.log(false == 0);
// console.log(true == "1"); // 1 == '1' --> 1 == 1;
// console.log(false == "0"); // 0 == '0' --> 0 == 0;
// console.log(null == undefined);
// console.log(NaN == NaN);

// console.log(0 === "");

// console.log([] === "");

// console.log([] == "");

// console.log([5] == "5");

// console.log([5] == 5);

console.log({} == {});
console.log([5] == [5]); // Primitive

const [p] = [4, 5, , 7, 8];
const q = p;
console.log(p == q);
// console.log([5].toString());
