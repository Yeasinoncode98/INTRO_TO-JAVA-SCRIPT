/**
 * objective : write a function to give me the sum of all numbers is an array
 * step 1 : declare a function
 * step 2 : call check whether the fucntion is called properly
 * step 3 : set a parameter(s)
 * step 4 : Pass the parameter(s), check whether paramter is passed in a proper format
 * step 5 : do the fucntion tasks (step  by step);
 */


function sumOfNumbers(numbers){
    let sum = 0;
for(const number of numbers){
    console.log(number);
    sum = sum + number;
}
return sum;
}

const numbs =[ 54,62,12,6]
const sum = sumOfNumbers(numbs);

console.log("Sum of numbers is : ",sum);
