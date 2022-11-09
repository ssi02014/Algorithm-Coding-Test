function merge(arr1, arr2) {
  const result = [];
  let [i, j] = [0, 0];

  // 비교하면서 result로 오름차순으로 주입
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i++]);
    } else {
      result.push(arr2[j++]);
      j++;
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

function mergeSort(arr) {}

console.log(merge([1, 10, 50], [2, 14, 99, 100])); // [1, 2, 10, 14, 50, 99, 100]
console.log(merge([], [1, 3])); // [1, 3]
