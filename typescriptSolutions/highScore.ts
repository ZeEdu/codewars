import { alphabet } from "./utils";

export default function (x: string) {
  const arrWords = x.toLowerCase().split(" ");
  let highestValue = {
    word: arrWords[0],
    value: 0,
  };
  for (let i = 0; i < arrWords.length; i++) {
    const wordValue = arrWords[i]
      .split("")
      .map((v) => alphabet.indexOf(v.toUpperCase()) + 1)
      .reduce((prev, curr) => prev + curr);
    if (wordValue > highestValue.value) {
      highestValue.word = arrWords[i];
      highestValue.value = wordValue;
    }
  }
  return highestValue.word;
}
