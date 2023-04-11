
const sum = (number1, number2) => number1 + number2;
console.log(sum(2, 3));

const multiply = (number) => number * 2;
console.log(multiply(sum(3, 3)));


const array = [1, 2, 3];
const pop = (array) => {
    array.pop()
    return array;
};
console.log(pop(array));

const unshift = (array, numbers) => {
    array.unshift(numbers)
    return array;
}
console.log(unshift(array, 10));

const double = array => array.map(number => number * 2);
console.log(double(array));


const randomNumber = (number) => {
    const random = Math.round(Math.random() * number);
    if (random === 0) return random + 1;
    return random
}

console.log(randomNumber(10))
console.log(randomNumber(6))

const round = (number) => {
    return Math.abs(number);
}
console.log(round(-10))



// Imperative vs Declarative

for (let i = 0; i < 100; i++) { // Imperative
    console.log(i)
}

[1, 2, 3, 4, 5].forEach(item => console.log(item)); //Declarative







































































































































