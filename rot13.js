/** @param {string} message */
function rot13(message) {
  return message.split("").map(element => {
    if (/[a-zA-Z]/.test(element)) {
      const charCode = element.charCodeAt(0);
      const capitalized = charCode >= 65 && charCode <= 90 ? true : false;
      const target = charCode + 13;
      if (capitalized) {
        const val = target > 90 ? target - 26 : target;
        return String.fromCharCode(val);
      }
      const val = target > 122 ? target - 26 : target;
      return String.fromCharCode(val)
    } else {
      return element
    }
  }).join("");

}


console.log(rot13("test"));
console.log(rot13("Test"));
