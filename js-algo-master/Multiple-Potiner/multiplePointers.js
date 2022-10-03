// 시간 복잡도 O(N), 공간 복잡도O(1)
function solution(arr) {
  let [start, end] = [0, arr.length - 1];

  arr.sort((a, b) => a - b); // 정렬이 되어있어야 함

  while (start < end) {
    const sum = arr[start] + arr[end];

    if (sum === 0) return [arr[start], arr[end]];
    else if (sum > 0) end--;
    else start++;
  }
}

console.log(solution([-3, -2, -1, 0, 1, 2, 3])); // [-3, 3]
console.log(solution([-4, -3, -2, -1, 0, 1, 5, 10])); // [-1, 1]
console.log(solution([5, 1, -2, 3, 0, 4, -5, 10])); // [-5, 5]
console.log(solution([-2, 0, 1, 3])); // undefined
console.log(solution([1, 2, 3])); // undefined

/* 
  solution([-3, -2, -1, 0, 1, 2, 3]) // [-3, 3]
  solution([-2, 0, 1, 3]) // undefined
  solution([1, 2, 3]) // undefined
*/
