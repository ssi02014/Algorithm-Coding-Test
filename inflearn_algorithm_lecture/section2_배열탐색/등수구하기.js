function solution(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    let rank = 1;

    for (let j = 0; j < arr.length; j++) {
      if (arr[i] < arr[j]) rank += 1;
    }
    result.push(rank);
  }
  return result;
}

function lectureSolution(arr) {
  const length = arr.length;
  const result = Array.from({ length }, () => 1);

  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      if (arr[i] < arr[j]) result[i]++;
    }
  }

  return result;
}
let arr = [92, 92, 92, 90, 89];
console.log(solution(arr));
