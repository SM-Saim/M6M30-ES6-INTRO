const friend = (friends) => {
  const even = [];
  for (const frnd of friends) {
    const len = frnd.length;
    if (len % 2 === 0) {
      even.push(frnd, [len]);
    }
  }
  return even;
};
const value = ["Abul", "Babul", "jiku", "Bodrul", "Wasil", "Soriful"];
const bondhu = friend(value);
console.log(bondhu);
