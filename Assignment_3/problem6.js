/** Problem 06 :  (Current Salary )  */
var experience = 30;
var startingSalary = 45000;
//write your code here

var growthRate = 1.05;
for (var i = 1; i <= experience; i++){
    startingSalary = startingSalary * growthRate;
}

var result = startingSalary.toFixed(2);
console.log(result);


