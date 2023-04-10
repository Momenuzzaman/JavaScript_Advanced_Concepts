const printName = () => {
    return "Md Momenuzzman";
};

const findMyName = () => {
    return printName();
};

const sayMyName = () => {
    return findMyName();

};

console.log(sayMyName());



