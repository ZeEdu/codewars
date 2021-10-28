"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function countingDuplicates(word) {
    var arrWord = word.toLowerCase().split("");
    var countingLettersOcurrences = [];
    arrWord.forEach(function (i) {
        var qntLetter = 0;
        arrWord.forEach(function (j) {
            if (i == j)
                qntLetter = qntLetter + 1;
        });
        if (qntLetter > 1)
            countingLettersOcurrences.push(i);
    });
    var singleLetters = [];
    countingLettersOcurrences.forEach(function (letter) {
        if (!singleLetters.includes(letter)) {
            singleLetters.push(letter);
        }
    });
    return singleLetters.length;
}
exports.default = countingDuplicates;
