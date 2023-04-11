// HOF
const hof = (fn, number) => {
    return fn(number * 5)
}
console.log(hof(function a(number) { return number }, 10));

// Closure 

const closure = () => {
    let count = 0;
    return function getCounter() {
        count++;
        return count;
    };
};

console.log(closure()())

const getCounter = closure();
console.log(getCounter())

// currying

const curriedMultiply = (a) => (b) => a * b;
console.log(curriedMultiply(10)(10));

const curriedMultiplyBy5 = curriedMultiply(5);
console.log(curriedMultiplyBy5(4));


// Partial Application 

const multiply = (a, b, c) => a * b * c;
const partialMultiply5 = multiply.bind(null, 5);
console.log(partialMultiply5(5, 5))