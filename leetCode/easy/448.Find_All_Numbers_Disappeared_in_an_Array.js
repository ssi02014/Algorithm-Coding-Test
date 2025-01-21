/**
 * 448. Find All Numbers Disappeared in an Array
 * topic: Array, Hash Table
 * @see https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/
 *
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  const arr = Array(nums.length + 1).fill(-1);
  const result = [];

  for (let i = 0; i < nums.length; i++) {
    arr[nums[i]] = nums[i];
  }

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === -1) {
      result.push(i);
    }
  }

  return result;
};
