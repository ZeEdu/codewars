"use strict";
// Bob is preparing to pass IQ test. The most frequent task in this test is to find out which one of the given numbers differs from the others. Bob observed that one number usually differs from the others in evenness. Help Bob — to check his answers, he needs a program that among the given numbers finds one that is different in evenness, and return a position of this number.
Object.defineProperty(exports, "__esModule", { value: true });
// ! Keep in mind that your task is to help Bob solve a real IQ test, which means indexes of the elements start from 1 (not 0)
function iqTest(numbers) {
    var numbersArray = numbers.split(" ").map(function (i) { return Number(i); });
    var isEven = function (num) { return (num % 2 === 0 ? true : false); };
    var evenNumbers = 0;
    numbersArray.forEach(function (i) {
        if (isEven(i))
            evenNumbers = evenNumbers + 1;
    });
    var pattern = evenNumbers > numbersArray.length / 2 ? "even" : "odd";
    if (pattern === "even") {
        return numbersArray.findIndex(function (i) { return !isEven(i); }) + 1;
    }
    return numbersArray.findIndex(function (i) { return isEven(i); }) + 1;
}
exports.default = iqTest;
