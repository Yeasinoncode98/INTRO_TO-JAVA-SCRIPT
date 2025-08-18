// document.getElementById("players-container").childNodes[3].childNodes[1].parentNode.parentNode.parentNode

// 1. Create element and set innerText or innerHtml

const newchild = document.createElement("li");
newchild.innerText = "New born footballer here";

// 2. find the parent where you will add the child

const playerList = document.getElementById("player-list");

// 3. Append child here
playerList.appendChild(newchild);
