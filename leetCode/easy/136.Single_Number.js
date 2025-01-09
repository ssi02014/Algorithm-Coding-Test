/**
 * 136. Single Number
 * @topic Array, Bit Manipulation, HashMap
 * @see https://leetcode.com/problems/single-number
 *
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  const obj = {};

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    obj[num] = (obj[num] || 0) + 1;
  }

  for (const key in obj) {
    if (obj[key] === 1) {
      return +key;
    }
  }
};
