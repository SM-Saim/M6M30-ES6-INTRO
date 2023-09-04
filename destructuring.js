// Destructuring:
// kono ekta jinis ke venge chure choto choto onshe vag kora ke destructuring bole.
// kono ekta array ba object theke kono kisu ekta khub sohoj vabe niea asa ke destructuring bole.

const actor = { name: "Ananta", age: 33, phone: 22334455 };

// Regualar way of getting a value from object
// const actorPhone = actor.phone;
// console.log(actorPhone);

// Destructuring:
// const {property name}= variable
// if right side is an object, left side of destructuring will be object as well
// use property name as variable that contains the property value.
const { phone } = actor;
console.log(phone);
// chaile ek er odik property eksathe declare kora jai.
const { name, age } = actor;
console.log(age);
console.log(name);

// Chaile property er naam o change kora jai, jeta ke bole allius.
const { name: naam, age: boyos } = actor;
console.log(naam);
console.log(boyos);

// array destructuring:
const numbers = [44, 55];
const [a, b] = numbers;

const [x, y] = [22, 33];

// Advanced destructuring:
function value(a, b) {
  return [a * 2, b * 2];
}
const [prothom, ditiyo] = value(10, 20);
console.log(prothom, ditiyo);

//Destructuring:
// 1.array destructuring er khetre sequence main kora laje, ebong sequence wise joto gula variable dhorbo, toto gula value asbe.
// 2. opject destructuring er khetre sequence maintain kora lage na.
