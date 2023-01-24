function solution(target, arr) {
  let start = 0;
  let end = arr.length - 1;

  arr.sort((a, b) => a - b);

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);

    if (arr[mid] === target) return mid + 1;
    else if (arr[mid] < target) start = mid + 1;
    else end = mid - 1;
  }
}

let arr = [23, 87, 65, 12, 57, 32, 99, 81];
console.log(solution(32, arr));
