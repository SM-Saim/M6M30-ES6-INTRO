function number(num1, num2) {
  total = num1 + num2;
  console.log(num1, num2, total);
  return total;
}
const calling = number(3, 6);

// Ex:2
function number(num1, num2) {
  total = num1 + num2;
  console.log(num1, num2, total);
  return total;
}
const call = number(3);
// Ami kono maan jodi provide na kori, taile default maan hocce undefined,
// 3 er sateh undefined jog korle eta ar onko thake na, tai  total answer NaN.

Ex: 3;
function number(num1, num2) {
  total = num1 + num2;
  console.log(num1, num2, total);
  return total;
}
const cl = number();
// taile result asbe , undefined,.undefined, NaN

// Default=> jodi maan ta provide na kora hoi, taile defautl er maan ta nibe, ar maan provide korle default er ar kono kaj nai.
// Normally, default er maan number er khetre, + er khetre 0, ebong * er khetre 1 dea hoi.
// Normally, default er maan string  er khetre empty string("") dora hoi.
// Normally, default er maan array er khetre empty array[] dora hoi.
// Normally, default er maan object er khetre empty object{} dora hoi.
// Ex:1
function number(num1, num2 = 0) {
  total = num1 + num2;
  console.log(num1, num2, total);
  return total;
}
const defaultValue = number(3);

// Ex:2
function number(num1, num2 = 9) {
  total = num1 + num2;
  console.log(num1, num2, total);
  return total;
}
const setValue = number(3, 6);

// Ex: 3
function name(firstName, lastName = "") {
  const full = firstName + " " + lastName;
  console.log(firstName, lastName, full);
  return full;
}
const fullName = name("Toyob");
