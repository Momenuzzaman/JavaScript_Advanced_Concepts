// new binging this 

function Person(name, age) {
    this.name = name;
    this.age = age;
};

const person1 = new Person('Emon', 26);
console.log(person1);


// implicit binding 

const person = {
    name: 'Emon',
    age: 26,
    hi() {
        return `hi ${this.name}!!!`;
    }
};

console.log(person.hi());


// arrow function 

const person4 = {
    name: 'Bob',
    age: 41,
    hi: function () {
        var inner = () => {
            return (`hi ${this.name}`)
        }
        return inner()
    }
}
console.log(person4.hi());



// explicit binding

const person3 = {
    name: 'John',
    age: 40,
    hi: function () {
        return `hi ${this.setTimeOut}`
    }.bind(window)
}

console.log(person3.hi());