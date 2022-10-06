// THIS GAME AUTOMATICALLY RUNS ITSELF IN THE TERMINAL UNTIL LUIGI DIES WHEN TYPED "NODE INDEX.JS"


class Player {
    constructor(name, totalCoins, status, hasStar,){

        this.name = name
        this.totalCoins = totalCoins
        this.status = status
        this.hasStar = hasStar
    }

    setName(hasPicked) {
        hasPicked = this.name

    }

    gotHit() {
        if(this.status === 'powered up') {
            this.status = 'big'
        }
        else if(this.status === 'big') {
            this.status = 'small'
        } else if(this.status === 'small') {
            this.status = "dead"
        }

    }

    gotPowerUp() {
        if(this.status === 'small') {
            this.status = 'big'
        }
        else if(this.status === 'big') {
            this.status = 'powered up'
        } else if(this.status === 'powered up') {
            this.hasStar++
        }
    }

    addCoin() {
        this.totalCoins++
    }

    print() {
        console.log(`Name: ${this.name},Total Coins: ${this.totalCoins}, Status: ${this.status}, Has star: ${this.hasStar}` )
    }
}

const character = new Player('Luigi', 4, 'small', 4);


function gameStopper() {
    const random = Math.floor(Math.random() * 3);
    character.print()

    if(random === 0) {
        character.gotHit()
    } else if(random === 1) {
        character.gotPowerUp()
    } else if(random === 2) {
        character.addCoin()
    }
    if(character.status === 'dead'){
        clearInterval(intervalID);
        console.log("GAME OVER")
        character.print()
    }
}

let intervalID = setInterval(function(){
    gameStopper()
 }, 1000);


 

