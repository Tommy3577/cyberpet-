const { Pet } = require('./pet');

class Dog extends Pet {
    constructor(petName, content) {
        super(petName, content);
        this.content = content;
    }

    greet() {
        this.mood += 5;
        this.hydration -= 5;
        console.log(`Hello, my name is ${this.petName}.`);
        console.log('     __/`.     .-"""-.         ')
        console.log("     \\_,` | \\-'  /   )`-')   ")
        console.log('      "") `"`    \\  ((`"`     ')
        console.log("     ___Y  ,    .'7 /|         ")
        console.log("    (_,___/...-` (_/_/         ")
    }
    
    drinks() {
        this.health += 10;
        this.hydration += 20;
        this.mood += 10;
        console.log('slurp slurp slurp....burp')
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
        console.log(`${this.petName} has been fed.`);
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
        console.log(`You played fetch with ${this.petName}, you threw a ball, they came back with a human arm.... `);
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
            console.log(`${this.petName} got injured while playing fetch!`)
            if (this.health < 81 && this.health > 50){console.log(`${this.petName} is in poor health.`)}
            if (this.health < 51 && this.health > 20){console.log(`${this.petName} is in very bad health...`)}
            if (this.health < 21 && this.health > 1){console.log(`${this.petName} needs urgent health care!`)}
            if (this.health < 1){console.log(`${this.petName} is dead!!!`); process.exit();}
            if (this.health < 1){console.log(`${this.petName} has died of neglect, it's all over social media, a mob is at your door....`); process.exit();}
            if (this.mood < 51 && this.mood > 1){console.log(`${this.petName} is in a bad mood!`)}
            if (this.mood < 1){console.log(`You didn't think it was possible, but against all odds, 
            ${this.petName}, somehow kills itself from sheer boredom!`); process.exit();}
        }

        if (this.health > 100){this.health = 100}
        if (this.hunger > 100){this.hunger = 100}
        if (this.hydration > 100){this.hydration = 100}
        if (this.mood > 100){this.mood = 100}

        return this;
    }
}
module.exports = { Dog };