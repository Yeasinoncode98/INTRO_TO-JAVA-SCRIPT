node; /** Problem -01 ( Divide the Asset ) */
var area = 15;
var brother = 2;
//write your code here

var result = area / brother;

console.log(result);

//.........................................

/** Problem -02 ( Cycle or Laptop ) */
var money = 9999;
//write your code here

if (money >= 25000) {
  console.log("Laptop");
} else if (money >= 10000) {
  console.log("Cycle");
} else {
  console.log("Chocolate");
}

//....................................

/** Problem -03 ( Medicine Planner ) */
var lastDay = 6;
//write your code here

for (let day = 1; day <= lastDay; day++) {
  if (day % 3 === 0) {
    console.log(day + " - medicine");
  } else {
    console.log(day + " - rest");
  }
}

//...........................................
//problem 4

//.............................................

/** Problem 05 - ( PH Email Generator )  */
var student = { name: "mewo", roll: 96, department: "cse" };

//write your code here

var result =
  student.name.toLowerCase() +
  student.roll +
  "." +
  student.department +
  "@ph.ac.bd";

console.log(result);

//............................................

/** Problem 06 :  (Current Salary )  */
var experience = 30;
var startingSalary = 45000;
//write your code here

var growthRate = 1.05;
for (var i = 1; i <= experience; i++) {
  startingSalary = startingSalary * growthRate;
}

var result = startingSalary.toFixed(2);
console.log(result);

