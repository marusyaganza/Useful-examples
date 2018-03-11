const arr = [1, 2, 3, 4, 5];
const reducing = arr.reduce((first, second) => {
    // console.log('first:', first);
    // console.log('second:', second);
    return first - second;
});
const someEl = arr.some(n => n > 13);
console.log('reduce: ', reducing);
console.log('some: ', someEl);
console.log('toLocaleString: ', arr.toLocaleString());
console.log('every: ', arr.every(n => n > 0));
console.log('keys: ', arr.keys().next());
console.log('join: ', arr.join(' '));
console.log('indexOf: ', arr.indexOf(5));
//console.log('values: ', arr.values().next());