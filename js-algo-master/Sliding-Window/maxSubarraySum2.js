/*
(문제)
Given an array of integers and a number, write a function called maxSubarraySum, which finds the maximum sum of a subarray with the length of the number passed to the function.

Note that a subarray must consist of consecutive elements from the original array. In the first example below, [100, 200, 300] is a subarray of the original array, but [100, 300] is not.
*/

function maxSubarraySum2(arr, target) {
  let tempSum = arr.slice(0, target).reduce((acc, cur) => acc + cur, 0);
  let maxSum = tempSum;

  if (arr.length < target) return null;
  for (let i = target; i < arr.length; i++) {
    tempSum = tempSum - arr[i - target] + arr[i];
    maxSum = Math.max(tempSum, maxSum);
  }
  return maxSum;
}

console.log(maxSubarraySum2([100, 200, 300, 400], 2)); // 700
console.log(maxSubarraySum2([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)); // 39
console.log(maxSubarraySum2([-3, 4, 0, -2, 6, -1], 2)); // 5
console.log(maxSubarraySum2([3, -2, 7, -4, 1, -1, 4, -2, 1], 2)); // 5
console.log(maxSubarraySum2([2, 3], 3)); // null
