/**
 * 349. Intersection of Two Arrays
 * @topic Array, Hash Table, Two Pointers, Binary Search, Sorting
 * @see https://leetcode.com/problems/intersection-of-two-arrays
 *
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  const result = [];
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);

  for (const item of set1) {
    if (set2.has(item)) {
      result.push(item);
    }
  }
  return result;
};
