const a = () => {
    const grandFather = "grandFather"
    return b = () => {
        const father = "father"
        return c = () => {
            const son = "son"
            return `${grandFather} > ${father} > ${son}`
        }
    }
}

console.log(a()()());

// Another Example 

const boo = (hi) => (hello) => (bye) => `${hi} ${hello} ${bye}`
const booString = boo("hi")("hello")("bye");
console.log(booString);

// Example 3 

const callMe = () => {
    const hello = "hello";
    const name = "Emon";
    setTimeout(() => {
        console.log(name);
    }, 4000)
    console.log(hello);
};

callMe();

// Example 4
const timer = () => {
    let initialTime = 0;
    const updateTime = () => initialTime++;
    const totalTime = () => initialTime;
    const timeBrake = () => {
        initialTime = -1;
        return "Boooom";
    };
    setInterval(updateTime, 1000);
    return {
        timeBrake,
        totalTime
    };
};

const time = timer();
