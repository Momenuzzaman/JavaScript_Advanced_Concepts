const show = () => {
    console.log('hello Everyone!');
}

const c = () => {
    console.log('c')
    setTimeout(show, 2000);
}

const b = () => {
    console.log('b')
    c();
}

const a = () => {
    console.log('a')
    b();
}
a();

console.log('1');
setTimeout(() => {
    console.log('2')
}, 4000);
console.log(3)