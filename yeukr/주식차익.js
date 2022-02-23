function solution(arr) {
  console.time("time");


  let result = [];
  let left = 0;
  let right = left + 1;

  while (left <= arr.length - 1) {

    if (arr[left] >= arr[right]) {
      right++;
    } else if (arr[left] < arr[right]) {
      result.push(right - left);
      left++;
      right = left + 1;
    }

    if (right > arr.length - 1) {
      result.push(-1);
      left++;
      right = left + 1;
    }
  }
  console.timeEnd("time");
  return result;
}

const arr = [4, 1, 4, 7, 6]; 
console.log(solution(arr));
console.log(solution([13, 7, 3, 7, 5, 16, 12])); 
console.log(solution([7, 6, 1, 4, 1]));
console.log(solution(arr.join("").repeat(100000).split("")));
//1.315s