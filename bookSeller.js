/**
 * link to kata: https://www.codewars.com/kata/54dc6f5a224c26032800005c/solutions/javascript/me/best_practice
 * @param {string[]} listOfArt
 * @param {string[]} listOfCat
 * */
function stockList(listOfArt, listOfCat) {
  const listOfArtFormatted = listOfArt.map((item) => ({
    id: item.split(" ")[0],
    value: item.split(" ")[1],
  }));

  const slices = listOfCat.map((cat) => {
    const value = listOfArtFormatted
      .filter((art) => art.id[0] === cat)
      .reduce((prValue, currValue) => prValue + Number(currValue.value), 0);
    return { id: cat, value };
  });

  const slicesSum = slices.reduce((a, b) => a + b.value, 0);
  if (slicesSum === 0) return "";
  return slices.map((val) => `(${val.id} : ${val.value})`).join(" - ");
}
