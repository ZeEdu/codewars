const vowels = [
  ["a", 1],
  ["e", 2],
  ["i", 3],
  ["o", 4],
  ["u", 5],
];
/**
 * @param {string} string
 */
function encode(string) {
  let response = string;
  vowels.forEach((val) => {
    const [chave, valor] = val;
    response = response.replace(new RegExp(chave, "g"), valor);
  });
  return response;
}

/**
 * @param {string} string
 */
function decode(string) {
  let response = string;
  vowels.forEach((val) => {
    const [chave, valor] = val;
    response = response.replace(new RegExp(valor, "g"), chave);
  });
  return response;
}

console.log(encode("hello"));
console.log(encode("How are you today?"));
console.log(encode("This is an encoding test"));
console.log(decode("h2ll4"));
