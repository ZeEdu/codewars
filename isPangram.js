const alphabet = require("./utils");
/** @param {string} phrase */
function isPangram(phrase) {
  const splitted = phrase
    .replace(/[^A-Za-z]+/g, "")
    .toUpperCase()
    .split("");
  const response = alphabet.map((l) => splitted.includes(l));
  if (response.includes(false)) {
    return false;
  } else {
    return true;
  }
}
