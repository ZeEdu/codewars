/** Link to kata: https://www.codewars.com/kata/561e9c843a2ef5a40c0000a4
 * @param {number} g
 * @param {number} m
 * @param {number} n
 */
function gap(g, m, n) {
  /**@param {number} number */
  const isPrime = (number) => {
    for (let i = 2; i < number; i++) {
      if (number % i === 0) return false;
    }
    return true;
  };

  let lastPrime = null;
  for (let i = m; i <= n; i++) {
    if (isPrime(i)) {
      if (i - lastPrime === g) return [lastPrime, i];
      else lastPrime = i;
    }
  }
  return null;
}
console.log(gap(2, 100, 110));
console.log(gap(4, 100, 110));
console.log(gap(6, 100, 110));
console.log(gap(8, 300, 400));
console.log(gap(10, 300, 400));
