// function arrayFinder(numbers){
//     let sum = 0;
//     for(const num of numbers){
//         if(Array.isArray(num)){
//             sum = sum + num;
//         }
//         else{
//             return "Not an Array";
//         }
//     }

//     return sum;
// }

// const result = arrayFinder([1,2,3]);
// console.log(result);


// function sumOfArray(arr){
//     let sum = 0;
//     if(Array.isArray(arr)== false){
//         return "Invalid";
//     }

//     for(let num of arr){
//         if(typeof num !==)
//         sum = sum + num;
//     }
//     return sum;
// }

// const result = sumOfArray(10);
// console.log(result);

function arrayFinder(numbers) {
  if (!Array.isArray(numbers)) {
    return "Not an Array";
  }
  let sum = 0;
  for (const num of numbers) {
    sum = sum + num;
  }
  return sum;
}

const result = arrayFinder([1, 2, 3,'kop']);
console.log(result);
