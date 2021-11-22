/**
 * @param {number} m
 * @param {number} n
 * */
function listSquared(m, n) {
  const stack = []
  for (let i = m; i <= n; i++) {
    if (n % i === 0) {
      stack.push(Math.pow(i, 2));
    }
  }
  const sum = stack.reduce((a, b) => a + b, 0);
  if (Number.isInteger(Math.sqrt(sum))) {
    console.log(" A soma é inteiro");
  }
}

listSquared(1, 250);
listSquared(42, 250);
listSquared(250, 500);
