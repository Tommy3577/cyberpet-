const inquirer = require('inquirer'); 
const { Pet } = require('./pet')
const { Dog } = require('./dog')
const { FleshEatingVirus } = require('./fleshEatingVirus')
const { SaberToothTiger } = require('./saberToothTiger')
//inports
let myPet;

async function start() {
    const {typeOfPet} = await inquirer.prompt({
        type: 'list',
        name: 'typeOfPet',
        message:
        'What type of pet would you like? Please choose from the following:',
        choices: [
            {
                key: 'a',
                name: 'Dog',
                value: 'dog',
            },
            {
                key: 'b',
                name: 'Flesh eating virus',
                value: 'fleshEatingVirus',
            },
            {
                key: 'c',
                name: 'Saber tooth tiger',             
                value: 'saberToothTiger',
            },
        ]
    })

const { petName } = await inquirer.prompt({
    type: 'input',
    name: 'petName',
    message: 'What is your pet called?',
});

if (typeOfPet === 'dog') myPet = new Dog(petName);
else if (typeOfPet === 'saberToothTiger') myPet = new SaberToothTiger(petName);
else if (typeOfPet === 'fleshEatingVirus') myPet = new FleshEatingVirus(petName);
// Create new pet when you name it

    let x = 0
    while (x == 0){
const {choice} = await inquirer.prompt({
    type: 'list',
    name: 'choice',
    message:
    `What would you like to do with ${petName}`,
    choices: [
        {
            key: 'z',
            name: `Greet ${petName} `,
            value: 'greet',
        },
        {
            key: 'a',
            name: `Play with ${petName} `,
            value: 'play',
        },
        {
            key: 'b',
            name: `Feed ${petName}`,
            value: 'eats',
        },
        {
            key: 'c',
            name: `Give ${petName} a drink`,
            value: 'drinks',
        },
        {
            key: 'd',
            name: `View ${petName} stats`,
            value: 'stats',
        },
        {
            key: 'e',
            name: 'Quit the game',
            value: 'quit',
        },
    ]
});

if (choice === 'greet') await myPet.greet(), myPet.stats();
if (choice === 'play') await myPet.play(), myPet.stats();
if (choice === 'eats') await myPet.eats(), myPet.stats();
if (choice === 'drinks') await myPet.drinks(), myPet.stats();
if (choice === 'stats') await myPet.stats();
if (choice === 'quit') {
const quitChoice = await myPet.quit();
if (choice == 'quit') {x = 1}

};
}
}
start();