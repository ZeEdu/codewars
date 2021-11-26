/**
 * link to kata: https://www.codewars.com/kata/5839edaa6754d6fec10000a2/solutions/javascript
 * @param {string[]} arr */
function findMissingLetter(arr) {
  const charCodes = arr.map((c) => c.charCodeAt(0));
  let result = 0;
  charCodes.reduce((prvVal, currVal) => {
    if (currVal - prvVal === 2) {
      result = currVal - 1;
    }
    return currVal;
  });
  return String.fromCharCode(result);
}
