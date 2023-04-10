
// inline caching 
const findUser = (user) => {
    return `Found ${user.firstName} ${user.lastName}.`;
};
const userData = {
    firstName: 'Md',
    lastName: 'Emon'
}
console.log(findUser(userData));
/////////////



// hidden classes
class Number {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    };
};
const number = new Number(1, 2);
console.log(number);
number.z = 3;
console.log(number);

delete number.x;
console.log(number);
/////////////



