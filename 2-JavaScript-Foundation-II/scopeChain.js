const sayMyName = () => {
    const a = 'a';
    return function findMyName() {
        const b = 'b';
        return function printMyName() {
            const c = 'c';
            return "Emon";
        }
    }
}

console.log(sayMyName()()())