// Object.create

const factoryFunctions = {
    attack() {
        return `${this.name} attack with ${this.weapons}.`;
    }
};

const factory = (name, weapons) => {
    const newFactor = Object.create(factoryFunctions);
    newFactor.name = name;
    newFactor.weapons = weapons;
    return newFactor;
};

const peter = factory('Peter', 'Stones');
console.log(peter.attack());

const wizard = factory('Wizard', 'Fire');
console.log(wizard.attack());




// constructor Function 
function Factory2(name, weapons) {
    this.name = name;
    this.weapons = weapons;
};
Factory2.prototype.attack = function () {
    return `${this.name} attack with ${this.weapons}.`;
};

Factory2.prototype.build = function () {
    const self = this;
    function building() {
        return `${self.name} builds a house.`;
    }
    return building()
}

const goblin = new Factory2('goblin', 'Gold');
console.log(goblin.__proto__);
console.log(goblin.attack());
console.log(goblin.build());