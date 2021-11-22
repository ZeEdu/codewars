/**
 * @param {any[]} arr*/
function moveZeros(arr) {
  const stack = []
  const zeroStack = [];
  arr.forEach(el => {
    if (el === 0) zeroStack.push(el);
    else stack.push(el);
  });
  return [...stack, ...zeroStack];
}




console.log(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]));
console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]));
