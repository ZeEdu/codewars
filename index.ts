// import contadorOcorrencias from "./contadorOcorrencias";
// import countingDuplicates from "./countingDuplicates";
// import iqTest from "./iq-teste";
// import arrayDiff from "./arrayDiff";
// import bitCounting from "./bitCouting";
// import isPangram from "./isPangram";
// import createPhoneNumber from "./phoneNumber";
// import findMissingLetter from "./findMissingLetter";
// import alphabetPosition from "./alphabetPosition";
// import countCharacters from "./countCharacters";
// import twoSum from "./twoSum";

import isValidWalk from "./isValidWalk";


const main = (): void => {
  console.log(isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's']));
  console.log(!isValidWalk(['w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e']));
  console.log(!isValidWalk(['w']));
  console.log(!isValidWalk(['n', 'n', 'n', 's', 'n', 's', 'n', 's', 'n', 's']));


};

main();
