console.log(1);
console.log(2);

let count = 0;
const intervalId = setInterval(() => {
  console.log(count++);
  if (count > 10) {
    clearInterval(intervalId);
  }
}, 2000);

console.log("Interval id", intervalId);
console.log(4);
console.log(5);

// SetTimeout will run 1 time and then i will stop
// SetInterval will run one by one again and again by taking interval time
// for 2,3,4,5,seconds wait then again will go ahead

// canel Method
// clearTimeout(intertimeoutId);
// clearInterval(intervalId);
