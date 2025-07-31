// 1. Create an array of book names
let books = ["Math Book", "English Book", "JavaScript Book", "Science Book", "History Book"];

// 2. Use includes() to check if "JavaScript Book" is in the array
let hasJavaScriptBook = books.includes("JavaScript Book");

// 3. Print message based on the result
if (hasJavaScriptBook) {
  console.log("Yes! The JavaScript book is in the list.");
} else {
  console.log("No, the JavaScript book is not in the list.");
}
