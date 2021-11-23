// Bob is preparing to pass IQ test. The most frequent task in this test is to
// find out which one of the given numbers differs from the others. Bob observed
// that one number usually differs from the others in evenness. Help Bob — to
// check his answers, he needs a program that among the given numbers finds one
// that is different in evenness, and return a position of this number.

// ! Keep in mind that your task is to help Bob solve a real IQ test, which means indexes of the elements start from 1 (not 0)

/** @param {string} numbers */
function testNumber(numbers) {
  const numberArr = numbers.split("").map((i) => Number(i));

  /** @param {number} num */
  const isEven = (num) => (num % 2 === 0 ? true : false);

  let evenNumbers = 0;
  numberArr.forEach((i) => {
    if (isEven(i)) evenNumbers = evenNumbers + 1;
  });

  let pattern = evenNumbers > numberArr.length / 2 ? "even" : "odd";
  if (pattern === "even") {
    return numberArr.findIndex((i) => !isEven(i) + 1);
  }
  return numberArr.findIndex((i) => isEven(i) + 1);
}
