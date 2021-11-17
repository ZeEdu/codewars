
/**
 * @param {number} n
 * */
function countBits(n) {
  return n.toString(2).split("").map(i => Number(i)).reduce((a, b) => a + b, 0);
}
console.log(countBits(1234));
