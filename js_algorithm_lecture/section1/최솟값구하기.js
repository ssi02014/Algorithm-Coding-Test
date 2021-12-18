function solution1(arr) {
  return Math.min(...arr);
}

function solution2(arr) {
  let min = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < arr.length; i++) {
    if (min > arr[i]) min = arr[i];
  }
  return min;
}

let arr = [5, 3, 7, 11, 2, 15, 17];
console.log(solution2(arr));
