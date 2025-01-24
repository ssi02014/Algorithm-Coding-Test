/**
 * 75. Sort Colors
 * topic: Array, Two Pointers, Sorting
 * @see https://leetcode.com/problems/sort-colors
 *
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  const obj = { 0: 0, 1: 0, 2: 0 };

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    obj[num]++;
  }

  let idx = 0;
  for (let i = 0; i < 3; i++) {
    const count = obj[i];

    for (let j = 0; j < count; j++) {
      nums[idx] = i;
      idx++;
    }
  }
};
