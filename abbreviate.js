/**
 * @param {string} string
 */
function abbreviate(string) {
  const na = /([^a-z])/i;
  const ss = string.split(na);
  return ss.map(element => {
    if (element.length >= 4) {
      return element = "" + element[0] + (element.length - 2) + element[element.length - 1];
    } else return element;
  }).join("")
}



console.log(abbreviate("internationalization"));
console.log(abbreviate("accessibility"));
console.log(abbreviate("Accessibility"));
console.log(abbreviate("elephant-rides are really fun!"));
