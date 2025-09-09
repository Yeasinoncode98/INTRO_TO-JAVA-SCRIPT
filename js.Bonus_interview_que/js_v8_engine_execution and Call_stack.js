/**
 * 
 * 1.What is V* engine
 * ==> 
 * 
V8 Engine হলো Google Chrome এবং Node.js-এ ব্যবহৃত JavaScript Engine।

এটি C++ দিয়ে লেখা।

JS কোডকে মেশিন ল্যাঙ্গুয়েজে compile করে → খুব দ্রুত execute করতে পারে।

V8 Just-In-Time (JIT) Compilation ব্যবহার করে কোডকে runtime-এ optimize করে।
 */

// ...................................

/**
 * 2.How does V8 engine works in JS?
 * ==>
 * V8 মূলত C++ দিয়ে লেখা একটি JavaScript Engine। এর কাজ ৪টি ধাপে হয়:
 * 
 * .....................................
 * 1️⃣ Parsing (পড়া এবং বোঝা)

V8 প্রথমে JS কোড পড়ে।

কোডকে tokenize করে এবং Abstract Syntax Tree (AST) বানায়।

AST হলো কোডের structure বোঝার একটি internal representation।
Ex- let x = 5 + 10;

.............................................
2️⃣ Ignition: Interpreter

AST থেকে Ignition interpreter মেশিন কোডে রূপান্তর করে।

কোড প্রথমে interpreted mode-এ চলে → দ্রুত compile হয় না, শুধু execute হয়।

এটি startup performance বাড়ায়।

.................................................

3️⃣ TurboFan: Optimizing Compiler

যদি কোনো function বারবার run হয়, V8 তা TurboFan optimizer এর মাধ্যমে optimize করে।

Optimized machine code অনেক দ্রুত execute হয়।

এই JIT (Just-In-Time) compilation engine performance বাড়ায়।

....................................................

4️⃣ Execution & Memory Management

V8 Call Stack এ function execution track করে।

Heap-এ objects এবং memory allocate হয়।

Garbage Collector (GC) অপ্রয়োজনীয় objects মুছে দেয়।


.....................................................
V8 Summary

1.Parsing → AST বানানো

2.Ignition → Interpreter মাধ্যমে run করা

3TurboFan → Optimizing compilation

4.Execution → Call Stack + Heap + GC

💡 সহজ কথায়:

V8 প্রথমে কোড বোঝে → run করে → যদি frequent হয় → optimize করে → memory efficient execution দেয়।
 */

// .............................................

/***
 * Execution Context কী?

Execution Context হলো JavaScript-এ কোনো কোড চালানোর সময় যা সব তথ্য রাখে (variables, functions, scope, this)।

1.প্রতিটি function call বা global code execution এর জন্য একটা Execution Context তৈরি হয়।

2.এটা JS engine কে বলে: “এই কোড কীভাবে execute করতে হবে, কোন variable কোথায় আছে”।
 * 

// .....................................

2. Execution Context এর তিনটি অংশ

1.Variable Environment

এখানে সব variables, functions store হয়।

Example: let a = 5; → a এখানে save হবে।

2.Scope Chain

JS যখন কোনো variable খুঁজে, execution context scope chain দেখে।

যদি variable local না থাকে → parent scope → global scope খুঁজে।

3.This Value

যেটা this keyword কে point করে।

Global context → this = window (browser), Node.js → global object

// .............................

3. Execution Context এর ধরণ

1.Global Execution Context

সব JS কোড run করার জন্য প্রথম context।

একবার page load হলে তৈরি হয়।

2.Function Execution Context

প্রতিটি function call এর জন্য আলাদা context তৈরি হয়।

Function শেষ হলে context remove হয় (stack থেকে pop)।


.................................................

4. Call Stack & Execution Context

JS engine call stack ব্যবহার করে execution context track করে।

Example:

function first() {
    console.log("first");
    second();
}

function second() {
    console.log("second");
}

first();


// summary

Call Stack Behavior:

1.Global context push

2.first() call → first context push

3.second() call → second context push

4.second() finish → pop second context

5.first() finish → pop first context

6.Global context finish

 * 
 */
