//Our Hero 🍩
const random = Math.floor(Math.random() * 2);

class Hero {
  constructor(name) {
    this.name = name;
    this.health = 100;
    this.object = {
      sprinkleSpray: 5,
      sugarShock: 10,
    };
    this.catchPhrases = [
      "I'm fresher than day old pizza",
      "You can't count my calories",
    ];
  }
  talkSass() {
    console.log(this.catchPhrases[random]);
  }
  announceHealth() {
    console.log(this.health);
  }
  battle(enemy) {
    const key = Object.keys(enemy.object);
    const hitpoint = enemy.object[key[random]];
    this.health -= hitpoint;
    console.log(`${this.name} got hit by ${key[random]}! His health is now ${this.health}!`);
  }
}
const dougieDonut = new Hero("Dougie Donut");

//Our Enemy
class Enemy {
  constructor(name) {
    this.name = name;
    this.health = 100;
    this.object = {
      pepperoniStars: 5,
      cheeseGrease: 10,
    };
    this.catchPhrases = [
      "I'm youtube famous",
      "I'm more dangerous than an uncovered sewer",
    ];
  }
  talkSmack() {
    console.log(this.catchPhrases[random]);
  }
  announceHealth() {
    console.log(this.health);
  }
  battle(enemy) {
    const key = Object.keys(enemy.object);
    const hitpoint = enemy.object[key[random]];
    this.health -= hitpoint;
    console.log(`${this.name} got hit by ${key[random]}! His health is now ${this.health}!`);
  }
}
const pizzaRat = new Enemy("Pizza Rat");

//Walking Down the Street
dougieDonut.talkSass();
pizzaRat.talkSmack();
dougieDonut.announceHealth();
pizzaRat.announceHealth();
//Battle
pizzaRat.battle(dougieDonut);
dougieDonut.battle(pizzaRat);
pizzaRat.announceHealth();
dougieDonut.announceHealth();

