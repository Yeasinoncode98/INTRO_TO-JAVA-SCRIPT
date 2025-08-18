// console.log("Append File Connected"); for chechking the file is connected or not

// 1. Parent Node
const mainContainer = document.getElementById("main-container");

// 2. Create Child Node
const placesSection = document.createElement("section");

// Create H1

const h1 = document.createElement("h1");
h1.innerText = "Places i want to visit";
placesSection.appendChild(h1);

const ul = document.createElement("ul");
const li1 = document.createElement("li");
li1.innerText = " Bandorban";
ul.appendChild(li1);

const li2 = document.createElement("li");
li2.innerText = "Kuakata";
ul.appendChild(li2);

placesSection.appendChild(ul);

// 3.Append placeSection to the mainContainer

mainContainer.appendChild(placesSection);

// Easier to create HTML

const booksSection = document.createElement("section");

booksSection.innerHTML = `
<h1>Books I need to read</h1>
<ul>

<li>Physics</li>
<li>Biology</li>
<li>Chemistry</li>
<li>Math</li>
</ul>


`;

mainContainer.appendChild(booksSection);
