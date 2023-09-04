// Spread Operator:
// Normally, kono variable theke max ber korte amra Math.max() use kori.
// Ex:
const numbers = Math.max(22, 56, 77, 123, 677, 333);
console.log(numbers);

// Spread Operator:
// Kintu ekoi process jodi kono array er mode apply kori taile kaj korbe na. tow value gula k spread korar jonno dorkar hoi spread operator(...)
// spread operatoe min , max ettadi khetre kaje lage.
const value = [22, 44, 55, 66, 77, 33];
// console.log(...value);
const highest = Math.max(...value);
console.log(highest);

// Use spread operator to copy:
//Primitive datatype: number, string, boolean.
// Non primitive data type: array, object
// Non primitive ekta variable theke arekta variable e maan set kori, tokon reference ta dhore rakhe. Mane jokon kono non-primitive k arekta nin primitive e assign kori, tara same jaiga ta dhore rakhe.

// Ex:
const value1 = [22, 44, 55, 66, 77];
const value2 = value1;
value2.push(88);
console.log(value1);
console.log(value2);

// Spread Operator:
//Er uddesso holo non primitive e jei ekoi referencce er karone ek jaigai value change korle 2 jaigai change hoi jai, eta solve kora, mane primitive data type er moto alada alada  memory location set kora.

// Referrence dhore rakha theke bachar upay holo, spread operator.
const friends = [33, 55, 66, 77, 88, 95];
const bondhu = [...friends]; //copy
friends.push(444);
console.log(friends);
console.log(bondhu);

// Add extra elements while copy:
const values = [33, 55, 66, 77, 88];
const maan = [...values, 999];
console.log(values);
console.log(maan);
