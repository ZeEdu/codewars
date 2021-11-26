/**
 * Link to kata: https://www.codewars.com/kata/55f8a9c06c018a0d6e000132/javascript
 * @param {string} pin*/
function validatePIN(pin) {
  const pinLength = pin.length;
  const onlyDigits = new RegExp(/^[0-9]*$/);

  if (pinLength === 4 || pinLength === 6) {
    if (onlyDigits.test(pin)) {
      return true;
    }
  }
  return false;
}
