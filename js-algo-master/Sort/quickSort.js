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
      console.log(arr);
    }
  }
  onSwap(arr, start, swapIdx);

  return swapIdx;
}

console.log(pivot([4, 8, 2, 1, 5, 7, 6, 3]));
