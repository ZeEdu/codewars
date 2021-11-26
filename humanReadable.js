// link to kata: https://www.codewars.com/kata/52685f7382004e774f0001f7

/**@param {number} seconds */
function humanReadable(seconds) {
  const hh = parseInt(seconds / 3600);
  const mm = parseInt(seconds / 60) % 60;
  const ss = seconds % 60;

  const pad = (val) => {
    return val < 10 ? `0${val}` : `${val}`;
  };

  return `${pad(hh)}:${pad(mm)}:${pad(ss)}`;
}

// function humanReadable(seconds) {
//   if (seconds >= 3600) {
//     const secsInH = Math.floor(seconds / 3600);
//     const HRest = Math.floor(seconds % 3600);
//     const secsInM = Math.floor(HRest / 60);
//     const secs = Math.floor(HRest % 60);
//     return `${
//       secsInH.toString().length < 2
//         ? secsInH.toString().padStart(2, "0")
//         : secsInH
//     }:${
//       secsInM.toString().length < 2
//         ? secsInM.toString().padStart(2, "0")
//         : secsInM
//     }:${secs.toString().length < 2 ? secs.toString().padStart(2, "0") : secs}`;
//   } else if (seconds >= 60) {
//     const secsInM = Math.floor(seconds / 60);
//     const secs = Math.floor(seconds % 60);
//     return `00:${
//       secsInM.toString().length < 2
//         ? secsInM.toString().padStart(2, "0")
//         : secsInM
//     }:${secs.toString().length < 2 ? secs.toString().padStart(2, "0") : secs}`;
//   } else {
//     return `00:00:${
//       seconds.toString().length < 2
//         ? seconds.toString().padStart(2, "0")
//         : seconds
//     }`;
//   }
// }
