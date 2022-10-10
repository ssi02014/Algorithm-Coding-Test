// O(logN) 이진 탐색 구조
function solution(arr, val) {
  let min = 0;
  let max = arr.length - 1;

  arr.sort((a, b) => a - b); // 이진 탐색은 사전에 정렬이 되어있어야 함

  while (min <= max) {
    const mid = Math.floor((min + max) / 2);
    const cur = arr[mid];

    console.log(arr[min], arr[mid], arr[max]);
    if (cur < val) {
      min = mid + 1;
    } else if (cur > val) {
      max = mid - 1;
    } else {
      return mid;
    }
  }
  return -1;
}

console.log(solution([1, 2, 3, 4, 5, 6], 4)); // 3
console.log(solution([1, 2, 3, 4, 5, 6], 6)); // 5
console.log(solution([1, 2, 3, 4, 5, 6], 11)); // -1
console.log(solution([1, 2, 3, 4, 5, 6, 8, 9, 12, 15, 16, 29], 9)); // 7

// O(N) 선형 탐색 구조
function naiveSolution(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) return i;
  }
  return -1;
}

// console.log(naiveSolution([1, 2, 3, 4, 5, 6], 4)); // 3
// console.log(naiveSolution([1, 2, 3, 4, 5, 6], 6)); // 5
// console.log(naiveSolution([1, 2, 3, 4, 5, 6], 11)); // -1
