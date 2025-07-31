// 1. Create different variables
let names = ["Alice", "Bob", "Charlie"]; // array
let age = 25;                            // number
let isStudent = true;                   // boolean
let info = { name: "Alice", age: 25 };  // object
let emptyList = [];                     // array
let greeting = "Hello World";           // string

// 2. Check if each variable is an array
console.log("Is 'names' an array?", Array.isArray(names));           // true
console.log("Is 'age' an array?", Array.isArray(age));               // false
console.log("Is 'isStudent' an array?", Array.isArray(isStudent));   // false
console.log("Is 'info' an array?", Array.isArray(info));             // false
console.log("Is 'emptyList' an array?", Array.isArray(emptyList));   // true
console.log("Is 'greeting' an array?", Array.isArray(greeting));     // false
