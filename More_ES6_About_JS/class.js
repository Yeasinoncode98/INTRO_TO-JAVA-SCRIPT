const player = {};

/**
 * class --> Template
 * 1.properties
 * 2.method
 *
 *
 * object -->
 *
 */

class Player {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.location = "Bangladesh";
    // console.log("Calling the constructor method", name);
  }
  goal() {
    console.log("score a goal");
  }

  getTeamName() {
    return "Barcelona";
  }
}

const player1 = new Player("Paulo Maldini", 25);
const player2 = new Player("Rude Gulit", 78);

console.log(player1);
console.log(player2);

// player1.goal();
// console.log(player1);

// const player2 = new Player();
// player2.getTeamName();
// console.log(player2);
