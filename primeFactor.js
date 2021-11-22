/** @param {number} n */
function primeFactors(n) {
  const stack = []
  while (n % 2 == 0) {
    n = Math.floor(n / 2);
    stack.push(2);
  }

  for (let i = 3; i <= Math.sqrt(n); i = i + 2) {
    while (n % i === 0) {
      stack.push(i)
      n = Math.floor(n / i);
    }
  }

  if (n > 2) {
    stack.push(n);
    return stack;
    console.log('stack', stack);
  }

}

primeFactors(12);
primeFactors(315);
