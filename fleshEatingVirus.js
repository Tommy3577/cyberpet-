const { Pet } = require('./pet');

class FleshEatingVirus extends Pet {
    constructor(name, content) {
        super(name, content);
        this.content = content;
    }

    greet() {
        this.mood += 5;
        this.hydration -= 5;
        console.log(`My name is ${this.petName}, one day I will destroy all life on this planet!`);
        console.log("    _           _          ")
        console.log(" _/ \\ _______ / \\_       ")
        console.log(" /  __/__   __\\__  \\     ")
        console.log(" \\_/____ \\ / ____\\_/    ")
        console.log(" //    \\___/   \\\\       ")
        console.log(" | |   o _ _ o   ||        ")
        console.log(" \\_\\___/ V \\___/_/      ")
        console.log(" < `    | |    ' >         ")
        console.log("  \\__.  \\^/  .__/        ")
        console.log("    >         <            ")
        console.log("    [_I_I_I_I_]            ")
        console.log("    /  /   \\ \\           ")
        console.log("  _/  /     \\  \\_        ")
        console.log(" /   <       >   \\        ")
        console.log(" \\_.  |     |  ._/        ")
        console.log("   \\_/       \\_/         ")
    }
    
    drinks() {
        this.health += 10;
        this.hydration += 20;
        this.mood += 10;
        console.log('Drop water on me, I have no mouth, stupid human!')
        if (this.health > 100){this.health = 100}
        if (this.hydration > 100){this.hydration = 100}
        if (this.mood > 100){this.mood = 100}
        // This is a cap, so the pet doesn't go over 100 and create ridiculous numbers
        return this;
    }

    eats(){
        this.mood += 10;
        this.health += 10;
        this.hunger += 20;
        console.log(`${this.petName} has a large appetite, half the neighbourhood is missing limbs...`);
        if (this.health > 100){this.health = 100}
        if (this.hunger > 100){this.hunger = 100}
        if (this.mood > 100){this.mood = 100}
        return this;
    }

    play(){
        let x = Math.ceil(Math.random() *10);
        if (x >= 0 && x <= 8){
        this.mood += 20;
        this.health += 20;
        this.hunger -= 20;
        this.hydration -= 20;
        console.log(`You played with ${this.petName} by releasing them into a highly populated area, you watched with delight in your hazmat suit.`);
        if (this.hunger < 81 && this.hunger > 50){console.log(`${this.petName} is getting hungry.`)}
        if (this.hunger < 51 && this.hunger > 20){console.log(`${this.petName} is getting very hungry...`)}
        if (this.hunger < 21 && this.hunger > 1){console.log(`${this.petName} is starving!`)}
        if (this.hunger < 1){console.log(`${this.petName} has died of starvation!!!`); process.exit();}
        if (this.hydration < 81 && this.hydration > 50){console.log(`${this.petName} is getting thirsty.`)}
        if (this.hydration < 51 && this.hydration > 20){console.log(`${this.petName} is getting very thirsty...`)}
        if (this.hydration < 21 && this.hydration > 1){console.log(`${this.petName} is severly dehydrated!`)}
        if (this.hydration < 1){console.log(`${this.petName} has died of dehydration!!!`); process.exit();}
        }
        if (x >= 9 && x <= 10){
            this.health -= 50;
            this.mood -= 50;
            console.log(`${this.petName} came into contact with a partial cure!`)
            if (this.health < 81 && this.health > 50){console.log(`${this.petName} is in poor health.`)}
            if (this.health < 51 && this.health > 20){console.log(`${this.petName} is in very bad health...`)}
            if (this.health < 21 && this.health > 1){console.log(`${this.petName} needs urgent health care!`)}
            if (this.health < 1){console.log(`${this.petName} is dead!!!`); process.exit();}
            if (this.health < 1){console.log(`${this.petName} has died of neglect, it's all over social media, a mob is at your door....`); process.exit();}
            if (this.mood < 51 && this.mood > 1){console.log(`${this.petName} is in a bad mood!`)}
            if (this.mood < 1){console.log(`${this.petName} got bored and mutated into genital herpes... which you 
            just contracted... it's best not to dwell how you got it yourself...`); process.exit();}
        }

        if (this.health > 100){this.health = 100}
        if (this.hunger > 100){this.hunger = 100}
        if (this.hydration > 100){this.hydration = 100}
        if (this.mood > 100){this.mood = 100}

        return this;
    }
}
module.exports = { FleshEatingVirus };