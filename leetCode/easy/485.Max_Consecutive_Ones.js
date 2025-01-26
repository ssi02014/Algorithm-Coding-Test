/**
 * 485. Max Consecutive Ones
 * topic: Array
 * @see https://leetcode.com/problems/max-consecutive-ones
 *
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  let count = 0;
  let result = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      count++;
    } else {
      count = 0;
    }
    result = Math.max(count, result);
  }

  return result;
};
