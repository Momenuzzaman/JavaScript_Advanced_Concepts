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
console.log(getCounter())
