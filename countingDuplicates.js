/**
 * link to kata: https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1
 * @param {string} word */
function countingDuplicates(word) {
  const arrWord = word.toLowerCase().split("");
  const countingLettersOcurrences = [];
  arrWord.forEach((i) => {
    let qntLetter = 0;
    arrWord.forEach((j) => {
      if (i == j) qntLetter = qntLetter + 1;
    });
    if (qntLetter > 1) countingLettersOcurrences.push(i);
  });
  const singleLetters = [];
  countingLettersOcurrences.forEach((letter) => {
    if (!singleLetters.includes(letter)) {
      singleLetters.push(letter);
    }
  });
  return singleLetters.length;
}
