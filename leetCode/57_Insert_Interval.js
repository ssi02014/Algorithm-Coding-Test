/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
  const result = [];
  let idx = 0;
  let length = intervals.length;

  while (idx < length && intervals[idx][1] < newInterval[0]) {
    result.push(intervals[idx]);
    idx++;
  }

  while (idx < length && intervals[idx][0] <= newInterval[1]) {
    newInterval[0] = Math.min(intervals[idx][0], newInterval[0]);
    newInterval[1] = Math.max(intervals[idx][1], newInterval[1]);
    idx++;
  }
  result.push(newInterval);

  while (idx < length) {
    result.push(intervals[idx]);
    idx++;
  }

  return result;
};

// /**
//  * @param {number[][]} intervals
//  * @param {number[]} newInterval
//  * @return {number[][]}
//  */
// var insert = function (intervals, newInterval) {
//   const result = [];
//   const [start, end] = newInterval;
//   let flat = intervals.flat();
//   let idx = 0;
//   let newFlat = flat.filter((el) => el < start || el > end);

//   if (newFlat.length < 1) {
//     result.push(newInterval);
//     return result;
//   }

//   if (newFlat.length % 2 !== 0) {
//     let temp = [];
//     let startflag = false;
//     let endflag = false;

//     for (let i = 0; i < newFlat.length; i++) {
//       temp.push(newFlat[i]);

//       if (!startflag && temp[0] > start) {
//         temp.unshift(start);
//         startflag = true;
//       }

//       if (!endflag && (!newFlat[i + 1] || newFlat[i + 1] > end)) {
//         temp.push(end);
//         endflag = true;
//       }
//     }
//     newFlat = temp;
//   } else {
//   }

//   for (let i = 0; i < Math.floor(newFlat.length / 2); i++) {
//     let count = 0;
//     let temp = [];

//     while (temp.length < 2) {
//       temp.push(newFlat[idx]);
//       count++;
//       idx++;
//     }
//     result.push(temp);
//   }

//   return result;
// };
