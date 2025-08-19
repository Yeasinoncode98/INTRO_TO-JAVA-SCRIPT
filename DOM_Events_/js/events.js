console.log("External FIle");

// Option Two to handle events

function makeYellow() {
  document.body.style.backgroundColor = "yellow";
}
function makeRed() {
  document.body.style.backgroundColor = "red";
}

// Option three to handle events get elements by ID and set onclick

const btnMakeBlue = document.getElementById("btn-make-blue");

btnMakeBlue.onclick = function makeBlue() {
  document.body.style.backgroundColor = " blue";
};

//option three slight different version
// Called function separetly

const btnMakePurple = document.getElementById("btn-make-purple");
// console.log(btnMakePurple);

btnMakePurple.onclick = makePurple;

function makePurple() {
  document.body.style.backgroundColor = "purple";
}
