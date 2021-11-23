/** @param {string} word */
function countCharacters(word) {
  const countingArray = [];
  const trace = [];
  for (let i = 0; i < word.length; i++) {
    if (!trace.includes(word[i])) {
      trace.push(word[i]);
      let count = 0;
      for (let j = 0; j < word.length; j++) {
        if (word[i] === word[j]) count = count + 1;
      }
      if (count > 0) countingArray.push([word[i], count]);
    }
  }
  const obj = {};
  for (const key of countingArray) {
    obj[key[0]] = key[1];
  }
  return obj;
}
