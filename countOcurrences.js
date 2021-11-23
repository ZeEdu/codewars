/** @param {string} word */
function countOcurrences(word) {
  const stringArr = word.toLowerCase().split("");

  const letterStack = [];
  stringArr.forEach((letter) => {
    if (!letterStack.includes(letter)) {
      let quantLetter = 0;
      stringArr.forEach((compLetra) => {
        if (letter === compLetra) quantLetter = quantLetter + 1;
      });
      console.log(`${letter}: ${quantLetter}`);
    }
    letterStack.push(letter);
  });
}
