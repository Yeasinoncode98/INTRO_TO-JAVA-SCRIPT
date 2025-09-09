console.log(1);
console.log(2);

const timeoutId = setTimeout(() => {
  console.log(3);
}, 5000);
const timeoutId2 = setTimeout(() => {
  console.log(33);
}, 5000);

console.log("TimeoutId", timeoutId, timeoutId2);
console.log(4);
console.log(5);
