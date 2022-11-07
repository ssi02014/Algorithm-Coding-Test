function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    const curVal = arr[i];
    let left = i - 1;

    while (left >= 0 && arr[left] > curVal) {
      arr[left + 1] = arr[left];
      left--;
    }
    arr[left + 1] = curVal;
  }
  return arr;
}

console.log(insertionSort([2, 1, 9, 76, 4])); // [1, 2, 4, 9, 76]
