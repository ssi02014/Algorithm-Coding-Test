function solution(m, arr) {
  let result = 0;
  let left = 0;
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum = arr[i];
    left = i + 1;

    if (sum <= m) result++;
    while (sum <= m) {
      sum += arr[left++];
      if (sum <= m) {
        result++;
      }
    }
  }
  return result;
}

let a = [1, 3, 1, 2, 3];
console.log(solution(5, a));
console.log(solution(5, [1, 1, 1, 1]));
