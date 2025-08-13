// Problem-02 : Clean & Capitalize Characters

function onlyCharacter(str) {
  if (typeof str !== "string") {
    return "Invalid";
  }

  let word = str.split(" ").join("");

  let final_word = word.toUpperCase();

  return final_word;
}

const str = onlyCharacter(" Hello World ");

console.log(str);
