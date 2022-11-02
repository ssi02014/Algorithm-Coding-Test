function onSwap(arr, idx1, idx2) {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}

function selectSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIdx = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIdx]) {
        minIdx = j;
      }
    }

    // swap
    onSwap(arr, i, minIdx);
  }

  return arr;
}

console.log(selectSort([5, 6, 3, 10, 8, 7, 12, 1])); // [ 1, 3, 5, 6, 7, 8, 10, 12 ]
console.log(selectSort([34, 22, 10, 19, 17])); // [ 10, 17, 19, 22, 34 ]
