const alphabet = require("./utils");

/** @param {string} text */
function alphabetPosition(text) {
  const phrase = [];
  for (let i = 0; i < text.length; i++) {
    const currentChar = text.toUpperCase()[i];
    if (alphabet.includes(currentChar)) {
      const letterIndex = alphabet.indexOf(currentChar);
      phrase.push(letterIndex + 1);
    }
  }
  return phrase.join(" ");
}
