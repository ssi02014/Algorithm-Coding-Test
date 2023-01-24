function solution(arr) {
  let result = 1;
  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
      result += 1;
    }
  }
  return result;
}

let arr = [130, 135, 148, 140, 145, 150, 150, 153];
console.log(solution(arr));
