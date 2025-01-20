/**
 * 268. Missing Number
 * topic: Array, Hash Table, Math, Binary Search, Bit Manipulation, Sorting
 * @see https://leetcode.com/problems/missing-number
 *
 * @param {number[]} nums
 * @return {number}
 */
// O(n log n)
var missingNumber = function (nums) {
  let result = null;

  nums.sort((a, b) => a - b);

  const max = nums.at(-1);

  for (let i = 0; i < max; i++) {
    if (nums[i] !== i) {
      result = i;
      break;
    }
  }

  return result === null ? max + 1 : result;
};

// O(3n)
var missingNumber = function (nums) {
  const arr = Array.from({ length: nums.length + 1 }, (_, idx) => idx);

  let hasZero = false;
  let totalSum = arr.reduce((acc, cur) => acc + cur, 0);

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      hasZero = true;
    }
    totalSum -= nums[i];
  }

  return totalSum === 0 ? (hasZero ? max + 1 : 0) : totalSum;
};

// O(3n), 더욱 간단하게 풀이 가능
var missingNumber = function (nums) {
  const arr = Array(nums.length + 1).fill(-1);

  for (let i = 0; i < nums.length; i++) {
    const curNum = nums[i];
    arr[curNum] = 1;
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === -1) {
      return i;
    }
  }

  return 0;
};
