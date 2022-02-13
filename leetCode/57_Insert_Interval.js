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
