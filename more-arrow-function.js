// More arrow function:

// implecit => mane chole deka jacce an, emon kaj, for exzapmle arrwo functio er return word ta k hide kora.
// explecit mane cholek deka jacche.

// arrow function: 3 parameter
const all = (num1, num2, num3) => num1 * num2 * num3;
const value = all(2, 4, 6);
console.log(value);

// Arrow function: 2 parameter
const values = (n1, n2) => n1 - n2;
const sub = values(10, 6);
console.log(sub);

// Arrow function: single parameter
// arrow function e jodi single ekta parameter hoi, taile ami bracket dieo parameter likte pari, bracket na deo likte pari.
// Ex:1
const person = (people) => people.age;
const student = { name: "anamta", age: 45 };
const value11 = person(student);
console.log(value11);

// Ex:2
const getValue = (number) => number[2];
const arr = [0, 22, 44, 5, 66, 77];
const values22 = getValue(arr);
console.log(values22);

// Arrow function: no parameter
const getPI = () => Math.PI;
console.log(getPI());

//  Arrow function: large arrow function
// Large arrow function er khetre return keyword dea lagbe, mane tikon explicit hoi jabe.

// Ex:
const sum = (X, Y, Z) => {
  const total1 = X * Y * Z;
  const total2 = X + Y + Z;
  const summation = total1 + total2;
  return summation;
};

const case1 = sum(2, 3, 4);
console.log(case1);
