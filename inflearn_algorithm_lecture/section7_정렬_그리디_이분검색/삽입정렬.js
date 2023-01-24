function solution(arr) {
  for (let i = 1; i < arr.length; i++) {
    let idx = i;

    for (let j = i - 1; j >= 0; j--) {
      if (arr[j] > arr[idx]) {
        [arr[j + 1], arr[j]] = [arr[j], arr[idx]];
        idx--;
      }
    }
  }
  return arr;
}

let arr = [11, 7, 15, 3, 5, 12, 6, 10, 1, 9];
console.log(solution(arr));
