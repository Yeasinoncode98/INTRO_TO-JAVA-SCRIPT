function one() {
  two();
  console.log(1);
}
function two() {
  three();
  console.log(2);
}
function three() {
  setTimeout(() => {
    console.log("Inside three timeout", 4);
  }, 4000);
  four();
  console.log(3);
}
function four() {
  setTimeout(() => {
    console.log("Inside timout 5");
  });
  five();
  console.log(4);
}
function five() {
  console.log(5);
}

one();

// Maintains call-stack and beside it maintains EventQueue
// first it do its stack work then hold others in queue after completing it
// it completes or call the queue list and set them by serial

// Notes

/**JavaScript Event Loop
1. Introduction

JavaScript হলো single-threaded → এক সময়ে একটাই কাজ execute করতে পারে।

কিন্তু আমরা চাই asynchronous কাজ (network request, timer, DOM events) handle করতে → Event Loop এখানে কাজ করে।

Event Loop হলো JS engine এর mechanism, যা asynchronous operations কে main thread এ execute করায়।

2. Components of Event Loop

Call Stack

JS কোড যে sequence এ execute হচ্ছে তা track করে।

Function call হলে push → function end হলে pop।

Web APIs / Background

Browser/Node.js provide করে asynchronous tasks handle করার জন্য।

Example: setTimeout, fetch, DOM events।

Callback Queue (Task Queue)

Asynchronous task complete হলে callback এখানে রাখা হয়।

Event Loop check করে → যদি Call Stack খালি → callback push করে execute।

Microtask Queue

Promise এর .then() বা async/await এর result handle করে।

Higher priority → Call Stack খালি হলে প্রথম execute হয়।

3. How it Works (Step by Step)

JS code start → Global Execution Context push Call Stack এ

Synchronous code execute হয় line by line

Asynchronous task (timer, fetch) background এ চলে

Task complete হলে → callback Queue তে push হয়

Event Loop check করে → Call Stack খালি হলে callback execute হয়

Microtask Queue এর tasks callback Queue এর আগে execute হয়

4. Example
console.log("Start");

setTimeout(() => {
  console.log("Timeout");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise");
});

console.log("End");


.......

Output:
Start
End
Promise
Timeout

...........

Explanation:

"Start" → synchronous → print

setTimeout → background → 0ms later callback queue

Promise → microtask queue → main thread খালি হলে execute

"End" → synchronous

Event Loop → microtask (Promise) আগে execute

Callback queue (Timeout) পরে execute

........................

5. Key Points

JS single-threaded → এক সময়ে একটাই code execute

Event Loop → asynchronous task handle করে

Microtask queue → higher priority (Promise, async/await)

Callback queue → lower priority (setTimeout, setInterval, DOM events)

সঠিকভাবে বুঝলে asynchronous JS কোড সহজে manage করা যায়

💡 Easy Summary:

Event Loop = JS engine এর traffic controller, যা asynchronous task কে sequence অনুযায়ী main thread এ execute করায়।s
 * 
 */
