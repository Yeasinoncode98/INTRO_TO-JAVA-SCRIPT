// callBack

function pakhiBhai(callMeBack, patro, patri) {
  console.log("Value of Patro", patro);
  //   console.log("CallMeBack Parameter", callMeBack);
  if (patri) {
    // console.log(callMeBack);
    callMeBack(patro);
  } else {
    console.log("Tor kopale Bia nai");
  }
}

function callSomeone(person) {
  console.log("calling", person);
}

// callSomeone("Jodu");
pakhiBhai(callSomeone, "jodu", "Nomi");
 