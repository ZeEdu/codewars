/**
 * link to kata: https://www.codewars.com/kata/55c45be3b2079eccff00010f/train/javascript
 * @param {string} words*/
function order(words) {
  if (words.length === 0) {
    return "";
  }

  const wordsArr = words.split(" ");
  const result = new Array(wordsArr.length);

  wordsArr.forEach((el) => {
    const number = el.split("").filter((e) => /[1-9]/.test(e));
    result[number - 1] = el;
  });
  return result.join(" ");
}

order("is2 Thi1s T4est 3a");
order("4of Fo1r pe6ople g3ood th5e the2");
order("");
