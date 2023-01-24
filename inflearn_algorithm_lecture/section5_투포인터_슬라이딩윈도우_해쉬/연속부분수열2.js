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

      if (sum <= m) result++;
    }
  }
  return result;
}

function lectureSolution(m, arr) {
  let result = 0;
  let sum = 0;
  let left = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];

    while (sum > m) {
      sum -= arr[left++];
    }
    result += i - left + 1;
  }
  return result;
}

let a = [1, 3, 1, 2, 3];
console.log(lectureSolution(5, a));
console.log(solution(100, [10, 5, 2, 6]));
