/**
 * 350. Intersection of Two Arrays 2
 * @topic Array, Hash Table, Two Pointers, Binary Search, Sorting
 * @see https://leetcode.com/problems/intersection-of-two-arrays-ii
 *
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

// 해당 문제는 교집합에서 중복 요소가 포함되어야 하기 때문에 투 포인터로 접근해야 됩니다.
var intersection = function (nums1, nums2) {
  const result = [];
  const sortedNums1 = [...nums1].sort((a, b) => a - b);
  const sortedNums2 = [...nums2].sort((a, b) => a - b);

  let i = 0;
  let j = 0;

  while (i < sortedNums1.length && j < sortedNums2.length) {
    if (sortedNums1[i] < sortedNums2[j]) {
      i++;
    } else if (sortedNums1[i] > sortedNums2[j]) {
      j++;
    } else {
      result.push(sortedNums1[i]);
      i++;
      j++;
    }
  }
  return result;
};
