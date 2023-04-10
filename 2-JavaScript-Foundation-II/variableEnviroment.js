const b = () => {
    var isValid = false;
    return isValid;
}

const a = () => {
    var isValid = true;
    return {
        functionB: b(), functionA: isValid
    };
};

var isValid;
console.log(a(), `Global variable : ${isValid}`);