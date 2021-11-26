/**
 * link to kata: https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/train/javascript
 * @param {string} word */
function duplicateEncode(word) {
  const str = word.toLowerCase();
  let result = "";
  for (let i = 0; i < str.length; i++) {
    const element = str[i];
    let letterCount = 0;
    for (let j = 0; j < str.length; j++) {
      if (str[j] === element) {
        letterCount++;
      }
    }
    if (letterCount > 1) result = result + ")";
    else result = result + "(";
  }
  return result;
}
console.log(duplicateEncode("din"));
console.log(duplicateEncode("recede"));
console.log(duplicateEncode("Success"));
console.log(duplicateEncode("(( @"));
