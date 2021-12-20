function solution(arr) {
  let count = 0;

  return arr
    .map((el) => {
      if (el) count += 1;
      else count = 0;
      return count;
    })
    .reduce((acc, cur) => acc + cur);
}

function lectureSolution(arr) {
  let answer = 0;
  let cnt = 0;

  for (let el of arr) {
    if (el === 1) {
      cnt++;
      answer += cnt;
    } else {
      cnt = 0;
    }
  }
  return answer;
}

let arr = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0];
console.log(solution(arr));
