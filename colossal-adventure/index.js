const readline = require('readline-sync');
let isGameOver = false;

let enemies = [
    {name: 'horse', hp: 100}, 
    {name: 'bug', hp: 100}, 
    {name: 'monster', hp: 100}
];

let player = {
    hp: 100, 
    name: '',
    awards: []
}
const name = readline.question('what is your name?')

player.name = name

const awards = ['Sword', 'Money', 'Shield', 'Food'];


function getRandomIntInclusive(min, max) {
    min = Math.floor(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function endGame() {
    console.log(isGameOver)
}

function oneOfTwo() {
    return Math.ceil(Math.random() * 2)
}


function oneOfThree() {
    return Math.ceil(Math.random() * 3) // 0 - 3 or 1 - 3
}

function oneOfFour() {
    return Math.floor(Math.random() * 4)
}

function checkStats() {
    const stats = readline.keyIn('Press s to check your PLAYERS stats, You might have NEW REWARDS or press c to continue', {limit: 'sc'})
        if(stats === 's') {
            console.log(player)
        }
        if(stats === 'c') {
            fight()
        }
    }


function attack() {
    const enemy = enemies[1];
    console.log(`Your enemy ${enemy.name.toUpperCase()} has been attacked`)
            enemy.hp = enemy.hp - getRandomIntInclusive(0, 100);
            player.hp = player.hp - getRandomIntInclusive(0, 45);
            console.log(`Enemy's health: ${enemy.hp} vs. ${player.name}'s health: ${player.hp}`);
                if(enemy.hp <= 0) {
                    console.log("You've defeated your enemy. Continue walking along")
                    console.log(enemy)
                    player.awards = awards[oneOfFour()];
                if(player.hp < 90) {
                    player.hp += getRandomIntInclusive(50, 100)
                }
                    checkStats()
                if(player.hp <= 0) {
                    endGame()
                }
                
    }
}

function walk() {
    
        fight()
    
}

function run() {
    let enemy = enemies[1]
    while(enemy.hp >= 0) {
        const answer = readline.keyIn('What do you want to do? A for attack, R for Run ', {limit: 'ar'})
    
            if(answer === 'a'){
                attack()
            }

            if(answer === 'r') {
                console.log('You have planned to run');
                let chance = oneOfTwo()

            if(player.hp <= 0) {
                isGameOver = true
                endGame()
        }
        else if(chance === 1) {
            player.hp = player.hp - getRandomIntInclusive(0, 45);
            console.log("Your run was not successful. Your enemy has conflicted damage on you");
            console.log(player.hp)
    }

    else if(chance === 2) {
        console.log("You have escaped your enemy")
        
    } 
            }
    }
}
function fight() {

    const enemy = enemies[1];

        if(enemy.hp > 0)
        console.log(` ${enemy.name} has appeared`)
        console.log(enemy)
        
        if(player.hp <= 0) {
        isGameOver = true
        endGame()
        }
            const continueToPlay = readline.keyIn('Press a to attack or press r to run ', {limit:'ar'});
            
            if(continueToPlay === 'a') {
                attack()
        }
        else if( continueToPlay === 'r') {
             run()
            }
    
        }
  

 
    
 


while(isGameOver === false) {
    walk()
    
    }



    
 
