function merge(arr1, arr2) {
  const result = [];
  let [i, j] = [0, 0];

  // 비교하면서 result로 오름차순으로 주입
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i++]);
    } else {
      result.push(arr2[j++]);
    }
  }

  // 남은 배열 그대로 뒤로 주입 코드
  while (i < arr1.length) {
    result.push(arr1[i++]);
  }

  while (j < arr2.length) {
    result.push(arr2[j++]);
  }

  return result;
}

function mergeSort(arr) {
  // 재귀 종료 케이스
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

// 병합
// console.log(merge([1, 10, 50], [2, 14, 99, 100])); // [1, 2, 10, 14, 50, 99, 100]
// console.log(merge([], [1, 3])); // [1, 3]
// console.log(merge([8], [3])); // [1, 3]

// 병합 정렬
console.log(mergeSort([10, 24, 76, 73, 72, 1, 9])); // [1, 9, 10, 24, 72, 73, 76]
console.log(mergeSort([10, 24, 76, 73])); // [10, 24, 73, 76]
