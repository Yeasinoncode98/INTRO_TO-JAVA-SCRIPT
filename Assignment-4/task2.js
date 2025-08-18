function onlyCharacter(str) {
  if (typeof str !== "string" || !str || Array.isArray(str)) {
    return "Invalid";
  }

  let word = str.split(" ").join("");

  let final_word = word.toUpperCase();

  return final_word;
}
