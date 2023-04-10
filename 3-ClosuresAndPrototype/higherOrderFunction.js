const giveAccess = (name) => {
    return `Access Granted ${name}`;
}

const authenticate = (user) => {
    let array = [];
    for (let i = 0; i < 100000; i++) {
        array.push(i);
    }
    return giveAccess(user);
}


console.log(authenticate("Emon"))
console.log(authenticate("Liton"))


// Higher Order Function 

const multiply = (number1) => (number2) => number1 * number2;

console.log(multiply(5)(5));
console.log(multiply(5)(6));