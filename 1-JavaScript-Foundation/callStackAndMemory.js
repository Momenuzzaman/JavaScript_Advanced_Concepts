// Call Stack + Memory Heap
const number = 10;  //allocate memory for number
const string = 'Hello'; //allocate memory for string
const object = {  //allocate memory for object.. and it's values
    firstName: 'John',
    lastName: 'Doe'
}

const subtract = (number) => {
    return number - 2;
}

const calculate = () => {
    const total = 10 + 2;
    return subtract(total);
}
console.log(calculate());