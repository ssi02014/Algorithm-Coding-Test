// O(N)
function solution(arr, num) {
  if (arr.length < num) return null;

  let maxSum = arr.slice(0, num).reduce((acc, cur) => acc + cur);
  let tempSum = maxSum;

  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(tempSum, maxSum);
  }
  return maxSum;
}

console.log(solution([1, 2, 5, 2, 8, 1, 5], 2)); // 10
console.log(solution([1, 2, 5, 2, 8, 1, 5], 4)); // 17
console.log(solution([2, 6, 9, 2, 1, 8, 5, 6, 3], 3)); // 19
console.log(solution([4, 2, 1, 6], 1)); // 6
console.log(solution([], 4)); // null

// O(N^2)
function naiveSolution(arr, num) {
  let max = Number.MIN_SAFE_INTEGER;

  if (arr.length < num) return null;
  for (let i = 0; i < arr.length - num + 1; i++) {
    let temp = 0;

    for (let j = 0; j < num; j++) {
      temp += arr[i + j];
    }
    if (temp > max) max = temp;
  }
  return max;
}
