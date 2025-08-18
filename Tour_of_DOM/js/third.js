console.log("Third File");

// Get the parent

const thirdList = document.getElementById("third-list");

// Create the child
const li = document.createElement("li");
li.innerText = "brand new list item";

thirdList.appendChild(li);
