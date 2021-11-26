/** link to kata: https://www.codewars.com/kata/523f5d21c841566fde000009
 * @param {number[]} a
 * @param {number[]} b
 * */
function arrayDiff(a, b) {
  const stack = [];
  a.forEach((val) => {
    if (!b.includes(val)) stack.push(val);
  });
  return stack;
}

console.log(arrayDiff([], [4, 5]));
console.log(arrayDiff([3, 4], [3]));
console.log(arrayDiff([1, 8, 2], []));
console.log(arrayDiff([1, 2, 3], [1, 2]));
