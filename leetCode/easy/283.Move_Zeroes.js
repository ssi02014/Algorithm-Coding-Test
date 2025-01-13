/**
 * 283. Move Zeroes
 * @topic Array, Two Pointers
 * @see https://leetcode.com/problems/move-zeroes/
 *
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// 핵심은 0을 제외한 상대적 순서를 유지하면서 0을 옮기는 것임
// 즉, 해당 문제에서는 굳이 정렬을 할 필요는 없음
var moveZeroes = function (nums) {
  let j = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
      j++;
    }
  }

  return nums;
};
