// console.log("Explore API");
// const person = {
//   name: "selim",
//   fruit: "dalim",
//   dish: "Halim",
//   friends: ['Alim,"kalim,Jalim'],
//   isRich: false,
//   money: 340000,
// };
// // normal object
// console.log(person, typeof person);
// //JSON --> jS object with notation
// // JSON.stringify
// // JSON.stringify() -->JSON convert
// // JSON.parse--> object converts

// // Making object to string
// const personJSON = JSON.stringify(person);
// console.log(personJSON, typeof personJSON);

// // To make Object by JSON
// // const parseJSON = JSON.parse(personJSON);
// // console.log(parseJSON);

fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json())
  .then((data) => console.log(data));

// const result = fetch("https://jsonplaceholder.typicode.com/todos/1");
// console.log(result);

// fetch is a function it tells
// the client to wait for sometime
// to get something but takes some time
// Then it gives the info that needed for the client

// What is API --->

// Application Programming Interface

// ......................
// object to JSON
// ----> Strinify

//.......................

// JSON to Object
// ----> parse
