// var- no reason to use var
// let- allow it to reassign (value reassign kora jabe)
// const- donot allow it to reassign (value ar reassign kora jabe na)
// normally, 70-80% khetre amra constant declare kore felb amra.

const value = 30;
const number = value + 30;
console.log(number);

let value1 = 30;
value1 = 40;
console.log(value1);

// Abar const hisabe jodi kono array declare kora hoi, otar mooder value gula ami nora chora korte parbo, kintu reassign korte parbo na, just vitorer value gula k nora chora korte parbo.

const num = [22, 55, 75, 33, 66];
num[2] = 33;
num.push(44, 55, 66, 77);
console.log(num);

// same way te object o use kora jai.
//const diye kono ekta property er naam chaile change korte pari.
const lives = {
  name: "moyor",
  class: "Bird",
};
lives.name = "kokil";
console.log(lives);

/* Overall, const diye kono kisu declare korle full variable tar maan ami chaile change korte parbo na, kintu ami chai vitor upadan e modify korte parbo, push, pop o korte parbo. ekoi vabe const diye object declare korle er maan ta ami new ekta oject diye set korte parbo na,
kintu vitorer upadan change korte parbo. 
Jodi variable er maan sorasori set kora lage taile let use korbo*/

// loop:
// loop er modde amra always let use korbo. karon loop er value ++ diye bar bar change hoi, tai let dite hobe. abar jog er khetre sum o kintu let hisabe declare korte hobe.

// Ex:wrong declaration
// const val = 0;
// for (const val1 = 0; val1 <= 10; val1++) {
// val = val + val1;
//   console.log(val1);
// }

// Ex: right approach

let sum = 0;
for (let val1 = 0; val1 < 10; val1++) {
  sum = sum + val1;
}
console.log(sum);

// const deyar por o kaj kortese karon loop se protibar notun kore value set kore, ar purano value k loop ses howar por falai dei.

// Mutable- change kora jai(var)
// Immutabe- change kor jai na.
