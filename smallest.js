/** link to kata: https://www.codewars.com/kata/573992c724fc289553000e95
 * @param {number} n */
function smallest(n) {
  const toArr = n.toString().split("");
  let smallestSoFar = n;
  let smallestIndex = 0;
  let smallestInsertIndex = 0;
  for (let i = 0; i < toArr.length; i++) {
    let currDigit = toArr[i];
    for (let j = 0; j < toArr.length; j++) {
      const copy = [...toArr];
      copy.splice(i, 1);
      const stack = [];
      for (let y = 0; y < toArr.length; y++) {
        if (y === j) stack.push(currDigit);
        else stack.push(copy.shift());
      }
      const toNumber = Number(stack.join(""));
      if (toNumber < smallestSoFar) {
        smallestSoFar = toNumber;
        smallestIndex = i;
        smallestInsertIndex = j;
      }
    }
  }
  return [smallestSoFar, smallestIndex, smallestInsertIndex];
}

// smallest(126);

smallest(261235);
smallest(209917);
smallest(285365);
smallest(269045);
smallest(296837);
