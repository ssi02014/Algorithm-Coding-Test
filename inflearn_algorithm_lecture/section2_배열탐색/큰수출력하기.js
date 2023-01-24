function solution(arr) {
  const result = [];

  result.push(arr[0]);

  for (let i = 1; i < arr.length - 1; i++) {
    if (arr[i] < arr[i + 1]) {
      result.push(arr[i + 1]);
    }
  }
  return result;
}

let arr = [7, 3, 9, 5, 6, 12];
console.log(solution(arr));
