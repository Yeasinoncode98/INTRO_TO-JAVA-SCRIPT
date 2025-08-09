/**
 * fucntion takes an array as a parameter
 * give me the avg of the odd number in a arry
 */

/**
 * 
 * 
 */


function oddAvg(numbers){
    const odds =[];
for(const number of numbers){
   
    if(number %2 === 1){
        // console.log(number);
        odds.push(number);
    }
  
   }
   //odds is the array that contains the odd numbers
//    console.log(odds);

let sum = 0;
for(const number of odds){
sum = sum + number;
}

const count = odds.length;
console.log(sum,count);
const avg = sum / count;
return avg;

}

const numbers = [42,13,58,65,81,96,7,5];
const avg = oddAvg(numbers);
console.log("Avg of the odd numbers:  ",avg);

