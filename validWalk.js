/**
 * link to kata: https://www.codewars.com/kata/54da539698b8a2ad76000228
 * @param {string[]} walk */
function isValidWalk(walk) {
  let axisX = 0;
  let axisY = 0;

  if (walk.length !== 10) {
    return false;
  }

  for (let i = 0; i < walk.length; i++) {
    const move = walk[i];
    switch (move) {
      case "e":
        axisX = axisX + 1;
        break;
      case "w":
        axisX = axisX - 1;
        break;
      case "n":
        axisY = axisY + 1;
        break;
      case "s":
        axisY = axisY - 1;
        break;
    }
  }

  if (axisX === 0 && axisY === 0) {
    return true;
  } else {
    return false;
  }
}
