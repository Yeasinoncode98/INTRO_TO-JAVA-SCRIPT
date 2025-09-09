async function loadData() {
  console.log("One");
  console.log("two");

  //Asynchronus behavior here cause didnt maintained serial
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((res) => res.json())
  //     .then((data) => console.log(data));

  //  Due to using await it signaled the program to wait and find the data then console
  //  with serially here it is called synchronus behavior
  //  await
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  console.log("Data got await", data[0].company.name);
  console.log("four");
  console.log("five");
}

// loadData();

// try {
// }
// catch {
// }

const loadData2 = async () => {
  console.log(1);
  console.log(2);
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    console.log("Got Data", data.length);
  } catch (error) {
    console.log("Error Happened");
  }
  console.log(4);
  console.log(5);
};

loadData2();

// ............................
/**
 * 1️⃣ Async/Await কী?

async এবং await হলো Promise handle করার একটি সহজ ও clean syntax।

async function → সর্বদা Promise return করে

await → Promise শেষ না হওয়া পর্যন্ত function কে wait করায়
 */

//............................

/**
 * 2️⃣ Syntax
 * async function myFunction() {
  const result = await somePromise();
  console.log(result);
}

 * async → function কে asynchronous বানায়

await → Promise resolve হওয়া পর্যন্ত wait করে, তারপর value assign করে


 */

//................................
/**
 * 3️⃣ Example (Simple)
 * 
 * function getNumber() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(42), 1000);
  });
}

async function showNumber() {
  console.log("Start");
  const num = await getNumber(); // wait until Promise resolves
  console.log("Number is:", num);
  console.log("End");
}

showNumber();

Output:

Start
Number is: 42  <-- 1 second later
End
s
 */

/**
 * 4️⃣ Example with Error Handling
 * async function fetchData() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.log("Error:", error);
  }
}

fetchData();

try/catch → .then().catch() alternative

কোড clean এবং readable থাকে

 */

/**\
 * 5️⃣ Key Points

async function → Promise return করে

await → Promise resolve হওয়া পর্যন্ত wait করে

Async/Await makes asynchronous code look synchronous

Error handle → try/catch
 */

/**
 * Easy way to remember:

async = function কে promise বানায়, await = promise কে wait করে value দেয়
 */
