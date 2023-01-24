// 시간 복잡도 O(N)
function solution(arr) {
  let result = 0;
  let [i, j] = [0, 1];

  arr.sort((a, b) => a - b);

  while (i <= arr.length - 1) {
    if (arr[i] !== arr[j]) {
      i = j++;
      result++;
      continue;
    }
    j++;
  }
  return result;
}

console.log(solution([1, 1, 1, 1, 1, 2])); // 2
console.log(solution([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); // 7
console.log(solution([])); // 0
console.log(solution([-2, -1, -1, 0, 1])); // 4

function lectureSolution(arr) {
  let i = 0;

  if (!arr.length) return 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}

console.log(lectureSolution([1, 1, 1, 1, 1, 2])); // 2
console.log(lectureSolution([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); // 7
console.log(lectureSolution([])); // 0
console.log(lectureSolution([-2, -1, -1, 0, 1])); // 4
