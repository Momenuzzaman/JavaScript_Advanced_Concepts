function marry(person1, person2) {
    console.log('argument', arguments);
    return `${person1} is now married to ${person2}.`;
}

console.log(marry('Tim', 'Tina'))