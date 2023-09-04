// 1
const para3 = (n1, n2, n3) => n1 * n2 * n3;
const values = para3(3, 6, 9);
console.log(values);

// 2
const templateLiterals = `I am a web developer
I love to code
I love to eat biriyini `;
console.log(templateLiterals);

// 3
const val = (para1, para2 = 0) => para1 + para2;

const sum = val(10);
console.log(sum);
