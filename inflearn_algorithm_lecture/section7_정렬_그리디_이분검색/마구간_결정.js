function count(stable, dist) {
  let count = 1;
  let end = stable[0];

  for (let i = 1; i < stable.length; i++) {
    if (stable[i] - end >= dist) {
      count++;
      end = stable[i];
    }
  }
  return count;
}

function solution(c, stable) {
  stable.sort((a, b) => a - b);

  let result = 0;
  let start = 1;
  let end = stable[stable.length - 1];

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (count(stable, mid) >= c) {
      result = mid;
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return result;
}

let arr = [1, 2, 8, 4, 9];
console.log(solution(3, arr));
