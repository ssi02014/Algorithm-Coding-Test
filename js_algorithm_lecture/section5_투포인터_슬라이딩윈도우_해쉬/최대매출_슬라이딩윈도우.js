// 슬라이딩 윈도우
function solution(k, arr) {
  let window = 0;
  let sum = 0;
  let result = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];

    if (i >= k) sum -= arr[window++];

    result = Math.max(result, sum);
  }
  return result;
}

// 2중 for문
function solution2(k, arr) {
  let result = 0;

  for (let i = 0; i < arr.length - k + 1; i++) {
    let currentSum = 0;

    for (let j = i; j < i + k; j++) {
      currentSum += arr[j];
    }

    result = Math.max(result, currentSum);
  }
  return result;
}

function lectureSolution(k, arr) {
  let result = 0;
  let sum = 0;

  for (let i = 0; i < k; i++) sum += arr[i];

  result = sum;

  for (let i = k; i < arr.length; i++) {
    sum += arr[i] - arr[i - k];
    result = Math.max(result, sum);
  }
  return result;
}

let a = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
console.log(solution2(5, a));
