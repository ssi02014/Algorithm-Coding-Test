/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * 374. Guess Number Higher or Lower
 * @topic Binary Search, Interactive
 * @see https://leetcode.com/problems/guess-number-higher-or-lower
 *
 * @param {number} n
 * @return {number}
 */
var guessNumber = function (n) {
  let start = 1;
  let end = n;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    const guessResult = guess(mid);

    if (guessResult === 0) {
      return mid;
    }

    if (guessResult === -1) {
      end = mid - 1;
    } else if (guessResult === 1) {
      start = mid + 1;
    }
  }
};
