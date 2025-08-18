function totalFine(fare) {
  let total;

  if (fare <= 0 || typeof fare !== "number") {
    return "Invalid";
  }

  total = fare + fare * (20 / 100) + 30;

  return total;
}



function onlyCharacter(str) {
  if (typeof str !== "string" || !str || Array.isArray(str)) {
    return "Invalid";
  }

  let word = str.split(" ").join("");

  let final_word = word.toUpperCase();

  return final_word;
}



function bestTeam(player1, player2) {
  if (
    !player1 ||
    !player2 ||
    Array.isArray(player1) ||
    Array.isArray(player2) ||
    typeof player1 !== "object" ||
    typeof player2 !== "object"
  ) {
    return "Invalid";
  }

  const team1 = player1.foul + player1.cardY + player1.cardR;
  const team2 = player2.foul + player2.cardY + player2.cardR;

  if (team1 < team2) {
    return player1.name;
  }

  if (team2 < team1) {
    return player2.name;
  }

  return "Tie";
}



function isSame(arr1, arr2) {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    return "Invalid";
  }

  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
}



function resultReport(marks) {
  if (!Array.isArray(marks)) {
    return "Invalid";
  }

  let totalScore = 0;
  let passCount = 0;
  let failCount = 0;

  for (const mark of marks) {
    totalScore = totalScore + mark;
    if (mark >= 40) {
      passCount++;
    } else {
      failCount++;
    }
  }

  let avg = totalScore / marks.length;

  let round = Math.round(avg);

  if (isNaN(avg)) {
    round = 0;
  } else {
    round = Math.round(avg);
  }

  return {
    finalScore: round,
    pass: passCount,
    fail: failCount,
  };
}

