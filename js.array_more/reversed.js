const numbers = [1,2,3,4,5];
//reverse = [5,4,3,2,1];

//1st way to rev a  array

const reversed = [];
for (let i = 0 ; i < numbers.length ; i++){
    console.log(numbers[i]);
    reversed.unshift(numbers[i]);
}

console.log(reversed);


//unshift kaj kore hocche 
// first upadan hishab add kore mane 
// age 5,4,3,2,1 pore na add kore age add kore dei '
//like 1 er pore dui na die 1 er age 2 ditese


//another way push method ............................

// for ( let i = numbers.length-1; i >= 0; i-- ){
//     reversed.push(numbers[i]);
// }

//index  dhore dhore korbe 
// size 5 but 5-1 = 4 tkhn eta jeye 4 index er value 5 ke push kore console korbe 



//for of method speically for array.................

// for (const num of numbers){

//     reversed.unshift(num);
// }


//easiest way direct by built in function ..............


//  numbers.reverse();  //easiest way built in fucntion (reverse);

//  console.log(numbers);

