/**
 * TERNARY --> THREE PARTS
 * 
 * ?   :
 * 
 * condition ? do something when true  : do something when false 
 */
const age = 22;

//normal if else statement

// if (age >=18) {
//     console.log('You can vote');
// }

// else{
//     console.log('You cant Vote');
// }

//Ternary simple
//age >= 18 ? console.log('vote dio ') : console.log ('Ghumai Thako');


let price = 1001;
const isLeader = true;

// if(isLeader === true){
//     price = 0;
// }

// else {
//     price = price + 100;

// }

// console.log(price);


// price = isLeader === true ? 0 : price + 100;
// console.log(price);

// Optional : semi-advanced ternary

//trial

// if(isLeader === true){
//     if(price > 1000) {
//         price = price / 2;
//     }
//     else {
//         price = 0;
//     }
// }
// else{
//     price = price + 100;
// }

// console.log(price);

// Feel free to ignore this part
// price  > 1000 ? price / 2 : 0;



// shorthand practise 
price = isLeader === true ? price  > 1000 ? price / 2 : 0 : price + 100;
console.log(price);