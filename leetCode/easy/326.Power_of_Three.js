/**
 * 326. Power of Three
 * @topic Math
 * @see https://leetcode.com/problems/power-of-three
 *
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {
  if (n < 1) return false;
  while (n > 1) {
    n /= 3;
  }
  return n === 1;
};
