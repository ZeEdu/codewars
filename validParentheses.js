// link to kata: https://www.codewars.com/kata/52774a314c2333f0a7000688
/** @param {string} parens */
function validParentheses(parens) {
  const stack = [];
  for (let i = 0; i < parens.length; i++) {
    if (parens[i] === "(") {
      stack.push(parens[i]);
    } else {
      if (stack.length === 0) return false;
      const lastInStack = stack.pop();
      if (parens[i] === ")" && lastInStack === "(") {
      } else return false;
    }
  }
  if (stack.length === 0) return true;
  else return false;
}
