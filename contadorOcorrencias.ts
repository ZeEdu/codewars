export default function contadorOcorrencias(palavra: string) {
  const arrPalavra = palavra.toLowerCase().split("");

  const arrLetras: Array<[string, number]> = [];
  arrPalavra.forEach((letra) => {
    let quantLetra = 0;
    arrPalavra.forEach((compLetra) => {
      if (letra === compLetra) quantLetra = quantLetra + 1;
    });
    arrLetras.push([letra, quantLetra]);
  });

  const letrasLidas: Array<string> = [];
  arrLetras.forEach((item) => {
    if (!letrasLidas.includes(item[0]) && item[1] > 1) {
      console.log(`${item[0]}: ${item[1]}`);
    }
    letrasLidas.push(item[0]);
  });
}
