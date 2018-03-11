let [firstName, lastName] = ['Mary', 'Smith'];
console.log('firstName', firstName);
console.log('lastName', lastName);
[firstName, lastName] = [lastName, firstName];
console.log('firstName', firstName);
console.log('lastName', lastName);
[a, b, ...c] = [1, 2, 3, 5, 6];
console.log('c =', c);
let {e, g} = {e:1, g:2};
console.log('e', e);
console.log('g', g);
function demo() {
    console.log(arguments);
};
demo();
