function onSwap(arr, idx1, idx2) {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}

// 기본 버블 정렬
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        console.log(arr);
        // swap
        onSwap(arr, j, j + 1);
      }
    }
  }
  return arr;
}

// 최적화 버블 정렬
function RefactoringBubbleSort(arr) {
  let noSwap;

  for (let i = 0; i < arr.length; i++) {
    noSwap = true;
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        // swap
        onSwap(arr, j, j + 1);
        noSwap = false;
      }
    }

    if (!noSwap) break;
  }
  return arr;
}

console.log(bubbleSort([5, 3, 10, 8, 7, 12])); // [ 3, 5, 7, 8, 10, 12 ]
console.log(RefactoringBubbleSort([5, 3, 10, 8, 7, 12])); // [ 3, 5, 7, 8, 10, 12 ]
