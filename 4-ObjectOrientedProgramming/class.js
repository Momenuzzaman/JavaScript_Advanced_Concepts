class Flf { //ES6 Class
    constructor(name, weapon) {
        this.name = name;
        this.weapon = weapon;
    };
    attack() {
        return `${this.name} ${this.weapon} attack with  ${this.weapon}.`
    };
};

const wizard = new Flf('Wizard', 'Fire');
console.log(wizard instanceof Flf)
console.log(wizard);
console.log(wizard.attack());
