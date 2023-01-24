function solution(day, arr) {
  return arr.filter((el) => el % 10 === day).length;
}

function lectureSolution(day, arr) {
  let answer = 0;

  for (let el of arr) {
    if (el / 10 === day) answer++;
  }

  return answer;
}

const arr = [25, 23, 11, 47, 53, 17, 33];
// const arr = [12, 20, 54, 30, 87, 91, 30];
console.log(solution(3, arr));
