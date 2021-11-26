/**
 * link to kata: https://www.codewars.com/kata/52c31f8e6605bcc646000082
 * @param {number[]} numbers
 * @param {number} target
 * */
function twoSum(numbers, target) {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === target && i !== j) {
        return [i, j];
      }
    }
  }
}

console.log(twoSum([1, 2, 3], 4));
console.log(twoSum([1234, 5678, 9012], 14690));
console.log(twoSum([2, 2, 3], 4));
