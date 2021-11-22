function countKprimes(k, start, nd) {
  const { length } = getPrimeFactorial(0);
}

/** @param {number} n */
function getPrimeFactorial(n) {
  const stack = [];
  let num = n;
  while (num % 2 === 0) {
    num = Math.floor(num / 2);
    stack.push(2);
  }

  for (let i = 3; i <= Math.sqrt(num); i = i + 2) {
    while (num % i === 0) {
      stack.push(i);
      num = Math.floor(num / i);
    }

    if (num > 2) {
      stack.push(n);
      return stack;
    }

    return null;

  }


  countKprimes(2, 0, 100)

  function puzzle(z) {

  }
