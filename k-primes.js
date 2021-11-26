/** Link to kata: https://www.codewars.com/kata/5726f813c8dcebf5ed000a6b/solutions/javascript
 * @param {number} k
 * @param {number} start
 * @param {number} nd */
function findKprimes(k, start, nd) {
  const count = [];
  for (let i = start; i <= nd; i++) {
    if (primeFactoringLength(i) === k) count.push(i);
  }
  return count;
}

/** @param {number} n
 * @returns {number} */
function primeFactoringLength(n) {
  if (n < 2) {
    return 0;
  }
  let length = 0;
  while (n % 2 === 0) {
    length++;
    n = Math.floor(n / 2);
  }
  for (let i = 3; i <= Math.sqrt(n); i = i + 2) {
    while (n % i === 0) {
      length++;
      n = Math.floor(n / i);
    }
  }
  if (n > 2) {
    length++;
  }
  return length;
}

/** @param {number} s */
function puzzle(s) {
  let a = [],
    b = [],
    c = [];
  let solutionsCount = 0;

  for (let i = 0; i <= s; i++) {
    const length = primeFactoringLength(i);
    if (length === 1) a.push(i);
    if (length === 3) b.push(i);
    if (length === 7) c.push(i);
  }

  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < b.length; j++) {
      for (let y = 0; y < c.length; y++) {
        if (a[i] + b[j] + c[y] === s) solutionsCount++;
      }
    }
  }

  return solutionsCount;
}

puzzle(138);
puzzle(143);
// console.log(findKprimes(2, 0, 100));
// console.log(findKprimes(3, 0, 100));
// console.log(findKprimes(5, 1000, 1100));
// console.log(findKprimes(5, 500, 600));
