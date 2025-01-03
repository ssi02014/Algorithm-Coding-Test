/**
 * 217. Contains Duplicate
 * topic: Array, Hash Table, Sorting
 * @see https://leetcode.com/problems/contains-duplicate
 *
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  const countObj = {};

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    countObj[num] = (countObj[num] || 0) + 1;

    if (countObj[num] > 1) {
      return true;
    }
  }

  return false;
};
