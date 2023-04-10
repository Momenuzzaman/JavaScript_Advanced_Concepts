(function () {
    console.log('Hello world!');
})();

const controller = (function () {
    const user = {
        name: 'John',
        age: 34
    }
    return user;
})();

const interface = (function () {
    console.log(`Hi ${controller.name}`)
})()