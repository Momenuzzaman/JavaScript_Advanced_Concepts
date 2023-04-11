
class Character {
    constructor(name, weapon) {
        this.name = name;
        this.weapon = weapon;
    };
    attack() {
        return `${this.name} attack with  ${this.weapon}.`
    };
};

class Elf extends Character {
    constructor(name, weapon, type) {
        super(name, weapon);
        this.type = type;
    };
    power() {
        return `${this.name} have Extra power ${this.type}.`
    };
};

class Ogle extends Character {
    constructor(name, weapon, colorType) {
        super(name, weapon);
        this.colorType = colorType;
    };
    color() {
        return `${this.name}  color ${this.colorType}`
    };
};

const dolby = new Character('dolby', 'firefox');
console.log(dolby);
console.log(dolby.attack())

const thor = new Elf('Thor', 'Hammer', 'Thunder');
console.log(thor);
console.log(thor.power());

const ogle = new Ogle('Ogre', 'bobble', 'Pink');
console.log(ogle);
console.log(ogle.color());
console.log(ogle.attack());