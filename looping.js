// for of loop ta amra chaile array er upor o chalaite pari, amra chile string er upor o chalaite pari.
// for in ta shudu matro object er jonno use kora hoi. (for in for object/io )
// for of ES6 er ekta featere, for in ta es6 eo chilo.

const value = [22, 55, 66, 77, 88, 55];
for (const values of value) {
  console.log(values);
}
// Ex:2
const str = "Alauddin Khan Alamgir";
for (const string of str) {
  console.log(string);
}

// For of ta object e chalaite parbo na, for in ta chalaite parbo.
const obj = {
  name: "Kaium",
  age: 33,
  roll: 11212,
};
for (const key in obj) {
  const valueOfObject = obj[key]; //obj kintu ekane variable, prperty er naam hoile. diye call kora jaito.
  console.log(key, valueOfObject);
}

// Optional: Using for of differently in object
const value22 = Object.keys(obj);
console.log(value22);
for (const key of value22) {
  const val = obj[key];
  console.log(key, val);
}
