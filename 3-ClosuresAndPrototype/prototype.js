const dragon = {
    name: 'Tyna',
    fire: true,
    fight() {
        return 5;
    },
    sign() {
        if (this.fire) {
            return `I am ${this.name},The breather of fire`;
        };
    }
};

const lizard = {
    name: 'Kiki',
    fight() {
        return 1;
    }
};


lizard.__proto__ = dragon;
console.log(lizard.sign());

for (let prop in lizard) {
    console.log(prop);
    if (lizard.hasOwnProperty(prop)) console.log(prop);
}



// easy way
const findYear = (number) => {
    return new Date('2010').getFullYear() - number;
}
console.log(findYear(1));


// prototype
Date.prototype.lastYear = function () {
    return this.getFullYear() - 1;
}
console.log(new Date('2010-10-10').lastYear())