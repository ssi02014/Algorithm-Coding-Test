function solution(target, arr) {
  let start = 0;
  let end = arr.length - 1;

  arr.sort((a, b) => a - b);

  while (start < end) {
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] === target) {
      return mid + 1;
    } else if (arr[mid] < target) {
      start = mid;
    } else {
      end = mid;
    }
  }

  console.log(arr);
}

let arr = [23, 87, 65, 12, 57, 32, 99, 81];
console.log(solution(32, arr));
