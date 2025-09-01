const name = "Tom Hanks"; //Global Scope
console.log("location", location);
if (true) {
  const data = 58;
  console.log("Inside the block Data", data, name);
  doMath(88, 999);
}

// console.log(data);

// while (true){

// }

for (const number of [1, 2, 3, 4, 5]) {
}

// function scope or local scope --> local means you can use it in certain area or field not globally
function doMath(a, b) {
  console.log(a, b);
  const sum = a + b;
  const total = sum + 10;
  function doubleIt(x) {
    return x * 2;
  }
  //   console.log("Calling doubleIt function", doubleIt(450));
}
// console.log(a, b);

// console.log("Calling doubleIt function", doubleIt(450));

// Temporal dead Zone
let location = "Balur-Ghat";

// .........................................

// Global → সবার জন্য ফ্রি

// Function → শুধু function এর ভেতর

// Block → শুধু { } এর ভেতর
