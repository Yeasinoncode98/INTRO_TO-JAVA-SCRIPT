// var let const difference
const tax = 5000;
let eta = 5;
eta = 3;

const student = {
  name: "Nayem",
  marks: 50,
};

const friends = ["abul", "babul", "kabul"];

// default parameter
function add(num1, num2 = 0) {}

// template string
const dynamicText = `My Tax: ${tax} and marks ${
  student.marks * 1.2
} has friend: ${friends[1]}`;

const innerHTML = `

<div>
<h1>HEllo : ${friends.length}</h1>
<p></p>
</div>

`;

// Arrow function

const add2 = (num1, num2) => num1 + num2;

const tenTimes = (x) => x * 10;

// Spread(...)
const newFriends = [...friends, "kabul", "kamu", "kiop"];

// Destructuring
const { marks: totalMarks, age = 0 } = student;
// console.log(totalMarks, age);

// Array
const [firstFriend] = friends;
