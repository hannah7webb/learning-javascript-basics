// Ties together basic object-oriented-programming concepts with a program that 
// uses classes, methods, instances, and randomization to simulate a battle game between two players.

class Player {
    constructor(name, power, opponent, health = 100) {
        // attaches properties to new Player object 
        this.name = name; 
        this.power = power; 
        this.opponent = opponent; 
        this.health = health;
    }

    hit() { // player hits opponent
        this.health -= 10;
        this.opponent.health -= 20;
        console.log(this.name + " hits " + this.opponent.name + "! ");
    }

    miss() { // player misses opponent
        this.health -= 10;
        console.log(this.name + " misses " + this.opponent.name + "! ");
    }

    powerUp() { // player captures a powerup 
        this.health += 5; 
        console.log(this.name + " gets a power-up!");
    }

    printScore() { // prints score to board 
        console.log("-----" + this.name + ": " + this.health + " | " + this.opponent.name + ": " + this.opponent.health + "-----\n");
    }
}

// instantiates Player class to create two player objects 
const playerOne = new Player("Puffin", "Water Bending"); 
const playerTwo = new Player("Ember", "Fire Bending"); 

// defines opponent property for each player 
playerOne.opponent = playerTwo; 
playerTwo.opponent = playerOne; 

// gets a random number integer between 1 and 10, inclusive 
function getRand() {
    return Math.floor(Math.random() * 11);
}

// simulates a battle game between two players 
function gameSim(playerA, playerB) {
    while ((playerA.health > 0) && (playerB.health > 0)) { // while both players are alive, run game  
        let num = getRand(); // gets a new random number ever loop 

        if (num % 2 === 0) { // if num is even, it's playerA's move
            if (num % 3 === 0) { // if num is divisible by 3, 
                playerA.miss(); // player A misses 
            } else { // if num is not divisible by 3,
                playerA.hit(); // player A hits 
            }
            if (num % 5 === 0) { // if num is divisible by 5, 
                playerA.powerUp(); // player A gets a power-up 
            }
            playerA.printScore(); // print score after each turn 
        } else { // if num is odd, it's playerB's move 
            if (num % 3 === 0) {
                playerB.miss();
            } else {
                playerB.hit();
            }
            if (num % 5 === 0) {
                playerB.powerUp();
            }
            playerA.printScore();
        }
    }

    if (playerA.health <= 0) { // determines winner and prints final score 
        console.log(playerA.power + " " + playerA.name + " was slain by " + playerB.power + " " + playerB.name + "!");
        console.log("Final score: " + playerA.name + ": 0 | " + playerB.name + ": " + playerB.health);
    } else if (playerB.health <= 0) {
        console.log(playerB.power + " " + playerB.name + " was slain by " + playerA.power + " " + playerA.name + "!");
        console.log("Final score: " + playerA.name + ": " + playerA.health + " | " + playerB.name + ": 0");
    } 

    return;
}

gameSim(playerOne, playerTwo); // calls gameSim to run game!


