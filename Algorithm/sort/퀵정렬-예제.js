let list = [7, 5, 9, 0, 3, 1, 6, 2, 4, 8];

function solution(list, start, end) {
  let [pivot, left, right] = [start, start + 1, end];

  if (start >= end) return;

  while (left <= right) {
    while (left <= end && list[left] <= list[pivot]) {
      left++;
    }
    while (right > start && list[right] >= list[pivot]) {
      right--;
    }
    if (left >= right) [list[right], list[pivot]] = [list[pivot], list[right]];
    else [list[left], list[right]] = [list[right], list[left]];
  }

  solution(list, start, right - 1);
  solution(list, right + 1, end);
}
solution(list, 0, list.length - 1);

console.log(list);

function quickSort2(array, left = 0, right = array.length - 1) {
  if (left >= right) {
    return;
  }
  const mid = Math.floor((left + right) / 2);
  const pivot = array[mid];
  const partition = divide(array, left, right, pivot);
  quickSort(array, left, partition - 1);
  quickSort(array, partition, right);
  function divide(array, left, right, pivot) {
    console.log(
      `array: ${array}, left: ${array[left]}, pivot: ${pivot}, right: ${array[right]}`
    );
    while (left <= right) {
      while (array[left] < pivot) {
        left++;
      }
      while (array[right] > pivot) {
        right--;
      }
      if (left <= right) {
        let swap = array[left];
        array[left] = array[right];
        array[right] = swap;
        left++;
        right--;
      }
    }
    return left;
  }
  return array;
}
