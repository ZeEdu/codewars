// Link to Kata: https://www.codewars.com/kata/53da3dbb4a5168369a0000fe/train/javascript
/** @param {number} number */
function even_or_odd(number) {
  if (number % 2 === 0) return "Even";
  else return "Odd";
}
console.log(even_or_odd(2));
console.log(even_or_odd(7));
console.log(even_or_odd(-42));
console.log(even_or_odd(-7));
console.log(even_or_odd(0));
