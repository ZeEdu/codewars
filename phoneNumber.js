// link to kata: https://www.codewars.com/kata/525f50e3b73515a6db000b83/solutions/javascript
/** @param {number[]} numbers */
function createPhoneNumber(numbers) {
  return `(${numbers.slice(0, 3).join("")}) ${numbers
    .slice(3, 6)
    .join("")}-${numbers.slice(6).join("")}`;
}
