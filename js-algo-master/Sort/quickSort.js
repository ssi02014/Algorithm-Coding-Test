function onSwap(arr, idx1, idx2) {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}

function pivot(arr, start = 0, end = arr.length + 1) {
  const pivotPoint = arr[start];
  let swapIdx = start;

  for (let i = start + 1; i < arr.length; i++) {
    if (pivotPoint > arr[i]) {
      swapIdx++;
      onSwap(arr, i, swapIdx);
    }
  }
  onSwap(arr, start, swapIdx);

  return swapIdx;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);

    //leftSide
    quickSort(arr, left, pivotIndex - 1);

    // rightSide
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}

console.log(pivot([4, 8, 2, 1, 5, 7, 6, 3])); // 3, arr: [3, 2, 1, 4, 5, 7, 6, 8]
console.log(quickSort([4, 8, 2, 1, 5, 7, 6, 3])); // [1, 2, 3, 4, 5, 6, 7, 8]
