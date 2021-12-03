
/**
 * Link to Kata: https://www.codewars.com/kata/54d81488b981293527000c8f/train/javascript
 * @param {number[]} ints
 * @param {number} s*/
// function sumPairs(ints, s) {
//   let distance = null;
//   let result = undefined;
//   for (let i = 0; i < ints.length; i++) {
//     for (let j = 0; j < ints.length; j++) {
//       if (ints[i] + ints[j] === s && i !== j) {
//         if (Math.abs(i - j) < distance || distance === null) {
//           distance = Math.abs(i - j);
//           result = [ints[i], ints[j]];
//         }
//       }
//     }
//   }
//   return result;
// }

function sumPairs(ints, s) {
  if (ints.length < 2) {
    return undefined;
  }
  let intSet = new Set();
  // intSet.add(ints[0]);

  for (let i = 0; i < ints.length; i++) {
    let needed = s - ints[i];
    if (intSet.has(needed)) {
      return [needed, ints[i]]
    }
    intSet.add(ints[i])
  }
  return undefined;
}

console.log(sumPairs([11, 3, 7, 5], 10));
console.log(sumPairs([4, 3, 2, 3, 4], 6));
console.log(sumPairs([0, 0, -2, 3], 2));
console.log(sumPairs([10, 5, 2, 3, 7, 5], 10));
