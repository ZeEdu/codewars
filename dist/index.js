"use strict";
// import contadorOcorrencias from "./contadorOcorrencias";
// import countingDuplicates from "./countingDuplicates";
// import iqTest from "./iq-teste";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var arrayDiff_1 = __importDefault(require("./arrayDiff"));
var main = function () {
    console.log((0, arrayDiff_1.default)([], [4, 5]));
    console.log((0, arrayDiff_1.default)([3, 4], [3]));
    console.log((0, arrayDiff_1.default)([1, 8, 2], []));
    console.log((0, arrayDiff_1.default)([1, 2, 3], [1, 2]));
};
main();
