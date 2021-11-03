"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var isValidWalk_1 = __importDefault(require("./isValidWalk"));
var main = function () {
    console.log((0, isValidWalk_1.default)(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's']));
    console.log(!(0, isValidWalk_1.default)(['w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e']));
    console.log(!(0, isValidWalk_1.default)(['w']));
    console.log(!(0, isValidWalk_1.default)(['n', 'n', 'n', 's', 'n', 's', 'n', 's', 'n', 's']));
};
main();
