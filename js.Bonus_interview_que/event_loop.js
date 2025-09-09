/**
 * 1. Event Loop কী?

Event Loop হলো JS engine এর এমন একটি system যা asynchronous কাজগুলো manage করে।

JS single-threaded → একসাথে একটাই কাজ করতে পারে

কিন্তু আমরা চাই network request বা timer background এ চলে → কাজ শেষ হলে main thread এ callback run হয়

Event Loop এই সব asynchronous task main thread এ schedule করে
 */

//...................................

/**
 * 2. How it works (সহজভাবে)

JS কোড line-by-line execute করে → Call Stack এ রাখা হয়

যদি কোনো asynchronous কাজ আসে (setTimeout, fetch) → Web APIs / background handle করে

কাজ শেষ হলে → callback Task Queue / Callback Queue তে যায়

Event Loop চেক করে → যদি Call Stack খালি → Queue থেকে callback push করে Call Stack এ execute করায়
 */

// ......................................

// Example
//console.log("Start");

// setTimeout(() => {
//   console.log("Timeout done");
// }, 0);

// console.log("End");

// Output
/**
 * 
 * Start
 * End
 * Timeout done
 *  


 */

//.............................

/**
 * কেন?

"Start" → synchronous → Call Stack এ → print

setTimeout → asynchronous → timer background → 0ms পর callback queue তে

"End" → synchronous → print

Call Stack খালি → Event Loop queue থেকে callback (Timeout done) push করে execute
 */

// Summary

/**
 * 4. Key Point

Call Stack → এখন কোন কাজ চলছে তা track করে

Web APIs / background → asynchronous কাজ handle করে

Callback Queue → কাজ শেষ হলে callback রাখে

Event Loop → main thread free হলে queue থেকে callback push করে execute করায়

💡 সহজ কথায়:

“Event Loop হলো JS engine এর traffic controller যা asynchronous কাজকে line-by-line execute করায়।”
 */
