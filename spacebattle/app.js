let battle = {
  targetShip: 0,
  userResponse: "",
};

const spaceship = {
  name: "USS Schwartznegger",
  hull: 20,
  firepower: 5,
  accuracy: 0.7,
  attack() {
    const random1 = Math.random();
    if (random1 <= this.accuracy) {
      return true;
    } else {
      return false;
    }
  },
};

class AlienShip {
  constructor(name) {
    this.name = name;
    this.hull = Math.floor(Math.random() * 4) + 3;
    this.firepower = Math.floor(Math.random() * 3) + 2;
    this.accuracy = (Math.floor(Math.random() * 3) + 6) / 10;
  }
  attack() {
    let random2 = Math.random();
    if (random2 <= this.accuracy) {
      return true;
    } else {
      return false;
    }
  }
}
let alienShips = [];
let createAlienShips = () => {
  for (let i = 0; i < 5; i++) {
    let name = "AS" + (i + 1);
    alienShips[i] = new AlienShip(name);
  }
};

const Battle = (spaceship, alienship) => {
  let ships = [spaceship, alienship];
  let attack = false;
  let attacking = 0;
  let beingAttacked = 1;
  let temp;
  console.log("\n");
  console.log("\n");
  console.log(
    "%c Battle starts!",
    "font-size: 30px; color:red; background: whitesmoke"
  );
  while (ships[beingAttacked].hull > 0) {
    if (ships[beingAttacked].hull > 0) {
      console.log(
        `%c ${ships[attacking].name} attacking ${ships[beingAttacked].name}.`,
        "color: black; background-color: whitesmoke; font-size: 20px;"
      );
      attack = ships[attacking].attack();
      if (attack === true) {
        ships[beingAttacked].hull -= ships[attacking].firepower;
        console.log(
          `%c Attack Successful! ${ships[beingAttacked].name} hull: ${ships[beingAttacked].hull}`,
          "color: blue; font-weight: bold; font-size: 17px;"
        );
      } else {
        console.log(
          `%c Attack Unsuccessful! ${ships[beingAttacked].name} hull: ${ships[beingAttacked].hull}. `,
          "color:red; background-color:black; font-size: 17px;"
        );
      }
      if (ships[beingAttacked].hull <= 0) {
        console.log(
          `%c ${ships[beingAttacked].name} has been destroyed.`,
          "color:green; font-size: 20px;"
        );
        if (ships[beingAttacked] === spaceship) {
          alert("Game Over!!!");
        } else if (
          ships[beingAttacked].name === alienShips[alienShips.length - 1].name
        ) {
          alert(
            `${ships[beingAttacked].name} Destroyed!!!\n\nYou have been VICTORIOUS!!!`
          );
          console.log(
            "%c YOU WON THE BATTLE!!!",
            "font-size: 35px; color:green; background: whitesmoke"
          );
        } else {
          battle.userResponse = prompt(
            `${alienShips[battle.targetShip].name} destroyed!!\n\n${
              spaceship.name
            } Hull: ${
              spaceship.hull
            }\n\nATTACK the next ship or RETREAT from battle?`,
            ""
          );
          battle.targetShip += 1;
          userResponse();
          return;
        }
      } else {
        temp = attacking;
        attacking = beingAttacked;
        beingAttacked = temp;
      }
    }
  }
};
const userResponse = () => {
  let responseUpperCase = battle.userResponse.toUpperCase();
  if (responseUpperCase === "ATTACK") {
    Battle(spaceship, alienShips[battle.targetShip]);
  } else if (responseUpperCase === "RETREAT") {
    alert("Game Over!");
  }
};

const startBattle = () => {
  createAlienShips();

  battle.userResponse = prompt(
    `Alien fleet ${
      alienShips[battle.targetShip].name
    } approaching\n\n ATTACK or RETREAT?`,
    ""
  );
  userResponse();
};

startBattle();
