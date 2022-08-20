const readline = require('readline-sync');
let isGameOver = false;

const enemies = [
    {name: 'horse', hp: 100}, 
    {name: 'bug', hp: 100}, 
    {name: 'monster', hp: 100}
]

const awards = ['Sword', 'Money', 'Shield', 'Food'];

const player = {
    hp: 100, 
    name: '',
    awards: []
}


const name = readline.question('what is your name?')

player.name = name

function getRandomIntInclusive(min, max) {
    min = Math.floor(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function oneOfTwo() {
    return Math.ceil(Math.random() * 2)
}

function oneOfThree() {
    return Math.ceil(Math.random() * 2) // 0 - 3 or 1 - 3
}

function oneOfFour() {
    return Math.floor(Math.random() * 4)
}




while(isGameOver === false) {
function fight() {

    const enemy = enemies[oneOfThree()]

    console.log(` ${enemy.name} has appeared`)
    console.log(enemy)

        while(enemy.hp >= 0) {
        const answer = readline.keyIn('What do you want to do? A for attack, R for Run ', {limit: 'ar'})
        

    
     if(answer === 'a'){
        console.log(`Your enemy ${enemy.name.toUpperCase()} has been attacked`)
        enemy.hp = enemy.hp - getRandomIntInclusive(0, 100);
        player.hp = player.hp - getRandomIntInclusive(0, 45);
        console.log(`Enemy's health: ${enemy.hp} vs. ${player.name}'s health: ${player.hp}`);
            if(enemy.hp <= 0) {
                console.log("You've defeated your enemy. Continue walking along")
                player.awards = awards[oneOfFour()];
                if(player.hp < 90) {
                    player.hp += getRandomIntInclusive(50, 100)
                }
                const continueToPlay = readline.keyIn('Press c to continue playing or press s check players stats', {limit:'cs'});
                
                if(continueToPlay === 'c') {
            walk()
        }
        else if( continueToPlay === 's') {
            console.log(player)
        }
        
        }
     }

     if(answer === 'r') {
        let chance = oneOfTwo();
        console.log('You have planned to run')

        if(player.hp <= 0) {
            isGameOver = true
            console.log("You have died. GAME OVER!");
        }
        else if(chance === 1) {
            player.hp = player.hp - getRandomIntInclusive(0, 45);
            console.log("Your run was not successful. Your enemy has conflicted damage on you");
            console.log(player)
        }

        else if(chance === 2) {
            console.log("You have escaped your enemy")
            
        }
        walk();
        
     }
    }
}

function walk() {
    const result = oneOfThree()
    //const enemy = enemies[oneOfThree()]
    if (result === 1) {
        
        fight()
    }  
}

walk()
    
    if(player.hp <= 0) {
        isGameOver = true
        console.log("GAME OVER!");
    }

 }

 const stats = readline.keyIn('', {limit: 'p'});
if (stats==='p') {
    console.log(player)
};
