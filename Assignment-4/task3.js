// const player1 = { name: "Germany", foul: 10, cardY: 1, cardR: 1 };
// const player2 = { name: "France", foul: 10, cardY: 2, cardR: 1 };

//Problem-03 : FIFA Best Team Award 

function bestTeam(player1, player2) {
  if (typeof player1 !== "object" || typeof player2 !== "object") {
    return "Invalid";
  }

  const team1 = player1.foul + player1.cardY + player1.cardR;
  const team2 = player2.foul + player2.cardY + player2.cardR;

  if (team1 < team2) {
    const call = player1.name;
    return call;
  } 
  else if (team2 < team1) {
    const call = player2.name;
    return call;
  }
   else if (team1 === team2) {
    return "Tie";
  }

}

console.log(bestTeam(player1, player2));
