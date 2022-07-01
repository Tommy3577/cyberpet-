const { Pet } = require('./pet');

class SaberToothTiger extends Pet {
    constructor(name, content) {
        super(name, content);
        this.content = content;
    }

    greet() {
        this.mood += 5;
        this.hydration -= 5;
        console.log(`I don't know how I got here, but my name is ${this.petName}.`);
        console.log("                    __,,,,_                            ")
        console.log("         _ __..-;''`--/'/ /.',-`-.                     ")
        console.log("     (`/' ` |  \\ \\ \\\\ / / / / .-'/`,_              ")
        console.log("    /'`\\ \\   |  \\ | \\| // // / -.,/_,'-,           ")
        console.log("   /<7' ;  \\ \\  | ; ||/ /| | \\/    |`-/,/-.,_,/')   ")
        console.log("  /  _.-, `,-\\,__|  _-| / \\ \\/|_/  |    '-/.;.\\'   ")
        console.log("  `-`  f/ ;      / __/ \\__ `/ |__/ |                  ")
        console.log("       `-'      |  -| =|\\_  \\  |-' |                 ")
        console.log("            __/   /_..-' `  ),'  //                    ")
        console.log("            ((__.-'((___..-'' \\__.'                   ")
    }
    
    drinks() {
        this.health += 10;
        this.hydration += 20;
        this.mood += 10;
        console.log('I usually drink from a watering hole, but this bowl will do, for now...')
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
        console.log(`${this.petName} didn't want cat food, so went to a near by field and ate a horse.`);
        if (this.health > 100){this.health = 100}
        if (this.hunger > 100){this.hunger = 100}
        if (this.mood > 100){this.mood = 100}
        return this;
        
    }

    play(){
        let x = Math.ceil(Math.random() *10);
        // This is to let a random varience mechanic into the game; you got a small chance (1 in 4) of injuring your pet. If you injure, health goes down
        if (x >= 0 && x <= 8){
        this.mood += 20;
        this.health += 20;
        this.hunger -= 20;
        this.hydration -= 20;
        console.log
        (`You played with ${this.petName}, you wanted them to chase the laser pointer, they were too smart for that, so they used you as a chew toy instead.`);
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
            console.log(`${this.petName} tried to hunt a pack of honey badgers and came up short, don't mess with honey badgers!`)
            if (this.health < 81 && this.health > 50){console.log(`${this.petName} is in poor health.`)}
            if (this.health < 51 && this.health > 20){console.log(`${this.petName} is in very bad health...`)}
            if (this.health < 21 && this.health > 1){console.log(`${this.petName} needs urgent health care!`)}
            if (this.health < 1){console.log(`${this.petName} is dead!!!`); process.exit();}
            if (this.health < 1){console.log(`${this.petName} has died of neglect, it's all over social media, a mob is at your door....`); process.exit();}
            if (this.mood < 51 && this.mood > 1){console.log(`${this.petName} is in a bad mood!`)}
            if (this.mood < 1){console.log(`${this.petName} is in a very bad mood, they look at you and for the first time you can see them evaluating you. 
            Then they ponder a simple question 'why am I your pet? I'm a damn saber tooth tiger!'.... still looking at you, they start to arch their back, 
            fur sticking up and their posture goes into a pose like its going to leap... facing you!`); process.exit();}
        }

        if (this.health > 100){this.health = 100}
        if (this.hunger > 100){this.hunger = 100}
        if (this.hydration > 100){this.hydration = 100}
        if (this.mood > 100){this.mood = 100}
        
        return this;
    }
}
module.exports = { SaberToothTiger };