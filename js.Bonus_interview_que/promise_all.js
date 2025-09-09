const getData1 = new Promise((resolve, reject) => {
  const num = Math.random() * 10;
  console.log("Genareted number1", num);
  if (num > 1) {
    resolve({ num1: num });
  } else {
    reject({ err: "Data is not available1" });
  }
});

//...............................

const getData2 = new Promise((resolve, reject) => {
  const num = Math.random() * 10;
  console.log("Genareted number2", num);
  if (num > 1) {
    resolve({ num2: num });
  } else {
    reject({ err: "Data is not available2" });
  }
});

//.....................................

const getData3 = new Promise((resolve, reject) => {
  const num = Math.random() * 10;
  console.log("Genareted number3", num);
  if (num > 1) {
    resolve({ num3: num });
  } else {
    reject({ err: "Data is not available3" });
  }
});

// to run all the promise together important one for interview

Promise.all([getData1, getData2, getData3])
  .then((res) => console.log(res))
  .catch((error) => console.log(error));

// ****  If one gets rejected then the full system wil get rejected

// getData
//   .then((data) => console.log("Promise resolved", data))
//   .catch((error) => console.log(error));

// Promise explanation
/**
 * 1️⃣ Promise কী?

Promise হলো একটি object যা future এ কোনো asynchronous কাজের result handle করে।

JS asynchronous কাজ করতে single-threaded, তাই future result (যেমন network request) handle করার জন্য Promise ব্যবহার করা হয়।

Promise ৩টি state রাখে:

Pending → কাজ চলছে, এখনও result নেই

Fulfilled (Resolved) → কাজ সফলভাবে শেষ হয়েছে

Rejected → কাজ fail হয়েছে
 */

//............................

/**2️⃣ Promise তৈরি করা
 * 
 * const myPromise = new Promise((resolve, reject) => {
  let success = true;
  if (success) {
    resolve("Work done"); // সফল হলে
  } else {
    reject("Work failed"); // fail হলে
  }
});

resolve(value) → promise সফলভাবে complete

reject(error) → promise fail

 */

//......................................

/**3️⃣ Promise ব্যবহার করা
 * myPromise
  .then((data) => console.log("Success:", data))
  .catch((err) => console.log("Error:", err));

  .then() → handle success

.catch() → handle error
 */

//...............................

/**4️⃣ Asynchronous উদাহরণ
 * 
 * const fetchData = new Promise((resolve, reject) => {
  setTimeout(() => {
    const data = { name: "Yeasin" };
    resolve(data); // 2 সেকেন্ড পরে data return করবে
  }, 2000);
});

console.log("Start");

fetchData
  .then((result) => console.log("Data received:", result))
  .catch((err) => console.log(err));

console.log("End");

 */

//........................

/**
 * 5️⃣ Key Points

Promise = future result handle করার object

States = Pending → Fulfilled → Rejected

.then() = success handle

.catch() = error handle

Asynchronous কাজের জন্য callback এর alternative, cleaner ও readable
 */

//......................................

/**
 * সহজভাবে:

Promise = “আমি future এ কাজ করব, কাজ শেষ হলে success বা fail বলে দিব।”
 */

//..............................

/**
 * 1️⃣ Promise.all() কী?

Promise.all() একটি built-in JS method যা multiple promises কে একসাথে handle করে।

এটা একটি array of promises নেয়।

সব promises success হলে → result array return করে

যদি কোনো একটি promise reject হয় → পুরো Promise.all reject হয়


 */

//...............................
/**
 * 💡 সহজ কথায়:

Promise.all = “একসাথে অনেক promises চালাও, সব success হলে result array, কোনো fail হলে error।”
 */
