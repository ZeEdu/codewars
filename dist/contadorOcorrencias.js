"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function contadorOcorrencias(palavra) {
    var arrPalavra = palavra.toLowerCase().split("");
    var arrLetras = [];
    arrPalavra.forEach(function (letra) {
        var quantLetra = 0;
        arrPalavra.forEach(function (compLetra) {
            if (letra === compLetra)
                quantLetra = quantLetra + 1;
        });
        arrLetras.push([letra, quantLetra]);
    });
    var letrasLidas = [];
    arrLetras.forEach(function (item) {
        if (!letrasLidas.includes(item[0]) && item[1] > 1) {
            console.log(item[0] + ": " + item[1]);
        }
        letrasLidas.push(item[0]);
    });
}
exports.default = contadorOcorrencias;
