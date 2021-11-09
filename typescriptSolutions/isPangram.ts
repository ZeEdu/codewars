import { alphabet } from "./utils";

const isPangram = (phrase: string): boolean => {
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
};
export default isPangram;
