/**
 * link to kata: https://www.codewars.com/kata/569d488d61b812a0f7000015
 * @param {number[]} data
 */
export default function (data) {
  const sliceCount = data.length / 8;
  const slices = [];
  for (let index = 1; index <= sliceCount; index++) {
    const slice = data.slice(index, index + 8);
    slices.push(slice);
  }
  const stack = [];
  for (let j = slices.length - 1; j >= 0; j--) {
    stack.push(slices[j]);
  }
  let responseData = [];
  for (let y = 0; y < stack.length; y++) {
    responseData = [...responseData, ...stack[y]];
  }
  return responseData;
}
