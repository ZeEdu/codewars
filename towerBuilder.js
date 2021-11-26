/**
 * link to kata: https://www.codewars.com/kata/576757b1df89ecf5bd00073b/javascript
 * @param {number} nFloors
 * @return {string[]}
 */
export default function (nFloors) {
  const response = [];
  for (let i = 0; i < nFloors; i++) {
    let floor = "";
    const floorSize = i * 2 + 1;
    const lastFloor = (nFloors - 1) * 2 + 1;
    const padSpacing = (lastFloor - floorSize) / 2;
    let whiteSpace = "";
    for (let index = 0; index < padSpacing; index++) {
      whiteSpace = whiteSpace + " ";
    }
    for (let j = 1; j <= floorSize; j++) {
      floor = floor + "*";
    }
    response.push(`${whiteSpace}${floor}${whiteSpace}`);
  }
  return response;
}
