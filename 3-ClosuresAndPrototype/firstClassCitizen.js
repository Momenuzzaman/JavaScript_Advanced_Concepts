// 1
const stuff = () => { };

// 2
const a = (fn) => {
    fn()
};

a(function () { console.log("hello") });

// 3

const b = () => {
    return function c() { console.log("Bye") };
};
// b()()
let d = b();
d()