/**
 * 367. Valid Perfect Square
 * topic: Math, Binary Search
 * @see https://leetcode.com/problems/valid-perfect-square
 *
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
  let min = 1;
  let max = num;

  while (min <= max) {
    const mid = Math.floor((min + max) / 2);
    const square = mid ** 2;

    if (square === num) {
      return true;
    }

    if (square < num) {
      min = mid + 1;
    } else {
      max = mid - 1;
    }
  }
  return false;
};
