// function onlyCharacter(str) {
//   if (typeof str !== "string" || !str || Array.isArray(str)) {
//     return "Invalid";
//   }

//   let word = str.split(" ").join("");

//   let final_word = word.toUpperCase();

//   return final_word;
// }

// let str = "olleh";

// // let word = str.reverse();

// let word = str.split("").reverse().join("")

// console.log(word);


// function addNumbers(a,b){
//   let sum = a + b;
//   return sum;

// }

// console.log(addNumbers(2,3));


// function swapNumbers(a,b){
 

//     temp = a;
//     a = b;
//     b= temp;



//     return {a,b};



// }

// console.log(swapNumbers(5,10));

// const prices = [20000, 16000, 50000, 100000, 122000, 30000, 35000];

// function getMin(numbers) {
//   let min = numbers[0];
//   for (const num of numbers) {
//     if (num < min) {
//       min = num;
//     }
//   }

//   return min;
// }

// const lowestPrice = getMin(prices);
// console.log("Cheapest Phone price from the market is: ", lowestPrice);
// console.log(lowestPrice);


function add(n1,n2){
    const sum = n1+n2;
    return sum;
}

console.log(add(5,10));