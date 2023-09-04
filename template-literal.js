// Uses of Template literals:(enclosed with ``)
// Normal concate korar somoy space er jonno majkane quotation ebong er maje space diea add korle ekta space create hoi.
const a = "Rahim";
const b = "uddin";
const sum = a + " " + b;
console.log(sum);

//Ex:2
const num1 = 30;
const num2 = 40;
console.log("Total of " + num1 + " and " + num2 + " is " + (num1 + num2));

/* Backtik:``
 Backtik er use normal string er motoi concate kore, tobe er ekta super power ase.
 string ke backtik er modde rekhe just value gula k ${} er modde raklei smae upoer line er moto kaj korbe.*/

console.log(`total of ${num1} and ${num2} is ${num1 + num2}`);

// Another uses of template literals:
const numb = [22, 44, 55, 66];
const numb2 = { name: "John", age: 23 };

console.log(`I choose number ${numb[2]} and age ${numb2.age}`);

// multiline string:
/* Abar normally string multi line likhar jonno amader \n ebong + diye diye likte hoi.
kintu backtik(``) er khetre eta kora lage navigator. */

const value = "The name \n" + "of our school \n" + "is BN";
console.log(value);

//multiline string using backtik(``)
const value1 = `The name 
of our school 
is BN`;
console.log(value1);

// By default string holo immutable, mane change kora jai na.
