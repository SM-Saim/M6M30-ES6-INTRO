// Keys: keys bolte amra apadoto property gula kei dhore nei. Objet.keys() keyword use ore object theke key gula k ber korte pari.
const value = {
  name: "hasim",
  age: 33,
  hobby: "gardening",
};
console.log(value);

// Find Keys:
const keys = Object.keys(value);
console.log(keys);
// [ 'name', 'age', 'hobby' ]

// Find values:
const value11 = Object.values(value);
console.log(value11);
//[ 'hasim', 33, 'gardening' ]

// Entries(jora jora dibe):
// eta ke array of array / 2D array o bole.
const pair = Object.entries(value);
console.log(pair);
// [ [ 'name', 'hasim' ], [ 'age', 33 ], [ 'hobby', 'gardening' ] ]

// Delete property from object
delete value.hobby;
console.log(value);

// Delete property using destructuring:
const { age, ...bakiGula } = value;
console.log(bakiGula);

// freeze: etar kono maan change korte dibo na, kono kisu remove korte dibo na.
Object.freeze(value);
delete value.name; //delete hoilo na
value.class = 11; //add hoilo na
console.log(value);

// seal: exixting property k modify kore, new property add korte parbo na
// Object.seal(value);
// delete value.name;
// value.name = "Galib";
// value.age = 100;
// value.class = "Uccho sikitto";
// console.log(value);
