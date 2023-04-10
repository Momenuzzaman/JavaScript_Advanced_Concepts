const object = {
    name: "Emon",
    sing() {
        return `lalalaaaa ${this.name}`
    },
    singAgain() {
        return `${this.sing()} !!!!!!!!!`
    }
};

console.log(object.sing());
console.log(object.singAgain());

// call apply and bind 
const wizard = {
    name: "Wizard",
    health: 150,
    heal(number1, number2) {
        return this.health += number1 + number2
    }
};

const archer = {
    name: "Archer",
    health: 50
};

console.log("Before", archer.health);

wizard.heal.call(archer, 30, 20); // call
wizard.heal.apply(archer, [10, 10]);// apply

console.log("After", archer.health);

const archerHealthUpdate = wizard.heal.bind(archer, 200, 100); //bind
archerHealthUpdate()
console.log(archer)
