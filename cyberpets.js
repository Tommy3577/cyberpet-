const inquirer = require('inquirer');
const {hamster} = require('./hamster.js');
const {x} = require('./hamster.js');
const {tiger} = require('./tiger.js');
// let typeofPet = ""

const y = 1;

console.log(hamster.x)

async function start() {
    typeOfPet = await inquirer.prompt({
        type: 'list',
        name: 'typeOfPet',
        message:
        'What type of pet would you like? Please choose from the following:',
        choices: [
            {
                key: 'a',
                name: 'Hamster',
                value: 'Hamster',
            },
            {
                key: 'b',
                name: 'tiger',
                value: 'tiger',
            },
        ]

    })
    if (typeOfPet == "Hamster"){
        console.log("hello")
        // console.log(eat())
        // console.log()
        // console.log(dog.eats());

        // if (choice === "status") console.log(myAnimal.vitals())
    }
};



start();