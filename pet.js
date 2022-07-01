class Pet {
    constructor (petName) {
    this.petName = petName;
    this.health = 100;
    this.hunger = 100;
    this.hydration = 100;
    this.mood = 100; 
    }
    
    quit(){
        console.log(`You have abandoned ${this.petName}, you are a bad owner`)
        process.exit();
    }
    stats(){
        return console.table({
            name: this.petName,
            health: this.health,
            hunger: this.hunger,
            hydration: this.hydration,
            mood: this.mood,
        });
        // Returns a table of stats of the pet
    }
}
module.exports = { Pet };