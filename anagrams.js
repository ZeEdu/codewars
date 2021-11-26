// link to kata: https://www.codewars.com/kata/523a86aa4230ebb5420001e1
/**
 * @param {string} word
 * @param {string[]} words
 */
// function anagrams(word, words) {
//   if (words.length === 0) {
//     return [];
//   }

//   /**@param {string} wordArg */
//   const splitWord = (wordArg) => {
//     return wordArg.split("").sort();
//   };

//   /**@param {string} wordArg */
//   const reduceWord = (wordArg) => {
//     const letterStack = [];
//     const itdStack = [];
//     for (let i = 0; i < wordArg.length; i++) {
//       if (!itdStack.includes(wordArg[i])) {
//         const element = wordArg[i];
//         let wordCount = 0;
//         itdStack.push(element);
//         for (let j = 0; j < wordArg.length; j++) {
//           if (element === wordArg[j]) {
//             wordCount = wordCount + 1;
//           }
//         }
//         letterStack.push([element, wordCount]);
//       }
//     }
//     return letterStack;
//   };

//   /**@param {any[]} wordArgsArr */
//   const flattenedToString = (wordArgsArr) => {
//     return wordArgsArr.reduce((a, c) => a.concat(c), []).join("");
//     // return wordArgsArr.flat().join("");
//   };

//   const reducedWord = reduceWord(splitWord(word));

//   const result = [];
//   for (let i = 0; i < words.length; i++) {
//     const reducedCurr = reduceWord(splitWord(words[i]));
//     if (
//       reducedWord.length === reducedCurr.length &&
//       flattenedToString(reducedCurr) === flattenedToString(reducedWord)
//     ) {
//       result.push(words[i]);
//     }
//   }
//   return result;
// }

/**
 * @param {string} word
 * @param {string[]} words
 */
function anagrams(word, words) {
  /**@param {string} wordArg */
  const sort = (wordArg) => {
    return wordArg.split("").sort().join("");
  };
  return words.filter((x) => {
    return sort(x) === sort(word);
  });
}
console.log(anagrams("abba", ["aabb", "abcd", "bbaa", "dada"]));
console.log(anagrams("racer", ["crazer", "carer", "racar", "caers", "racer"]));
console.log(anagrams("laser", ["lazing", "lazy", "lacer"]));
