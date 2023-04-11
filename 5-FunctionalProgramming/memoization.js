let cache = {};

const memoization = (n) => {
    if (n in cache) {
        return cache[n];
    }
    else {
        console.log('long time');
        cache[n] = n * 10
        return cache[n];
    }
};

console.log(memoization(10))
console.log(memoization(1))
console.log(cache)