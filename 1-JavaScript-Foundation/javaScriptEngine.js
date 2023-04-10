
// JavaScript Engine 
const jsEngine = (code) => {
    return code.split(' ')
}
console.log(jsEngine('var a = 1'));


// interpreture vs compiler 

const someCalculation = (x, y) => {
    return x + y
}

for (let i = 0; i < 10; i++) {
    console.log(someCalculation(3, 2))
    console.log(i)
}