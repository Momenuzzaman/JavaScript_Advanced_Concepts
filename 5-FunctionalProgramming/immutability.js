const object = { name: 'Ruhi' };

const clone = (obj) => {
    return { ...obj };
};

const changeName = (obj, name) => {
    const object2 = clone(obj);
    object2.name = name;
    return object2;
}

const updateObj = changeName(object, 'Emon');
console.log(object);
console.log(updateObj)