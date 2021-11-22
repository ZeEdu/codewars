/**
 * @param {string} str
 * */
function pigLatin(str) {
  return str.split(/([^a-z])/i).map(element => {
    if (/[a-zA-Z]/.test(element)) {
      const arrFromEl = element.split("");
      arrFromEl.push(arrFromEl.shift());
      return `${arrFromEl.join('')}ay`;
    }
    return element;
  }).join("");

}

console.log(pigLatin('Pig latin is cool'));
console.log(pigLatin('This is my string'));
console.log(pigLatin('Hello World!'));
