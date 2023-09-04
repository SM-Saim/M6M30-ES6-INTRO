// Normal function decleration:
function number(num1, num2) {
  return num1 + num2;
}
const sum = number(33, 5);
console.log(sum);

// function Expression:
// Chaile amra function name na diea eivabeo declere korte pari: eta k e bole function expression.
const value = function (num1, num2) {
  return num1 + num2;
};
const sum2 = value(33, 5);
console.log(sum2);

//Arrow function:
// Arrow function ta onelk ta function expession r moto. tobe aro shortcut.
// variable declare korbo, functioner parameter declare korbo, => sign dibo, return word ta chara ki return korbo oita likbo.
// Eta ES6 er ekta feature.

// Ex1:
const value1 = (num1, num2) => num1 + num2;
const sum3 = value1(22, 33);
console.log(sum3);

// Ex:2
const summ = (n1, n2, n3, n4) => n1 + n2 + n3 + n4;
const values = summ(1, 2, 3, 4);
console.log(values);

// Ex:3
const all = (n1, n2, n3, n4) => n1 * n2 * n3;
const allValues = all(1, 2, 3);
console.log(allValues);
