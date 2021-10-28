"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var iq_teste_1 = __importDefault(require("./iq-teste"));
var main = function () {
    console.log((0, iq_teste_1.default)("2 4 7 8 10"));
    console.log((0, iq_teste_1.default)("1 2 1 1"));
};
main();
