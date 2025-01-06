/**
 * 219. Contains Duplicate II
 * topic: Array, Hash Table, Sliding Window
 *
 * @see https://leetcode.com/problems/contains-duplicate-ii/description/
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  const set = new Set();

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    if (set.has(num)) {
      return true;
    }

    set.add(num);

    // set 크기가 k보다 커지면 set의 앞부분(i - k)부터 제거
    if (set.size > k) {
      set.delete(nums[i - k]);
    }
  }

  return false;
};
