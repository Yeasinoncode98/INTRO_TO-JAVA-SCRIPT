console.log("one");
console.log("two");

// setTimeout(callThree, 5000);

// setTimeout(()=>{
//     console.log("New Three inside set time out")
// },4000)

// console.log("three");
// callThree();
// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((res) => res.json())
//   .then((data) => console.log(data));

console.log("four");
console.log("five");

function callThree() {
  console.log("three");
}

/**
 *
 *  ব্রাউজারে fetch ঠিকই চলে।

    Terminal/Node.js এ fetch Node.js 18+ হলে built-in চলে।

    পুরোনো Node.js হলে node-fetch লাগবে।
 */
// ....................

// This is showing and asychronus behavior as it is missing the serial at the top

/**
 * 1. Single-Threaded মানে কী?

Single-Threaded মানে JS engine এক সময়ে একটাই কাজ করতে পারে।

অর্থাৎ, এক সময়ে একটাই piece of code execute হয়।

তাই JS synchronous কোড line-by-line execute করে।


.........................................
2. তাহলে asynchronous কোড কিভাবে চলে?

যদিও JS single-threaded, Browser বা Node.js event loop + Web APIs ব্যবহার করে asynchronous কাজ করতে পারে।

উদাহরণ: setTimeout, fetch, DOM events ইত্যাদি।

এই asynchronous tasks background thread (browser/Node runtime) handle করে → response আসলে callback queue থেকে main thread execute করে।

..........................................
Example

console.log("one");

setTimeout(() => {
  console.log("two");
}, 1000);

console.log("three");

 * 
*/
// Note added with proper usage
