export default function countingDuplicates(word: string) {
  const arrWord = word.toLowerCase().split("");
  const countingLettersOcurrences: string[] = [];
  arrWord.forEach((i) => {
    let qntLetter = 0;
    arrWord.forEach((j) => {
      if (i == j) qntLetter = qntLetter + 1;
    });
    if (qntLetter > 1) countingLettersOcurrences.push(i);
  });
  const singleLetters: string[] = [];
  countingLettersOcurrences.forEach((letter) => {
    if (!singleLetters.includes(letter)) {
      singleLetters.push(letter);
    }
  });
  return singleLetters.length;
}
