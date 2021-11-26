/**
 * linkt to kata: https://www.codewars.com/kata/59c633e7dcc4053512000073
 * @param {string} s
 */
export default function (s) {
  return s
    .split(/[aeiou]/)
    .filter((i) => i !== "")
    .map((el) => el.split("").reduce((a, b) => a + b.charCodeAt(0) - 96, 0))
    .reduce((a, b) => (a > b ? a : b));
}
