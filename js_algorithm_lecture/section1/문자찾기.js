function solution(s, t) {
  let count = 0;
  for (let el of s) {
    if (el === t) count++;
  }
  return count;
}

function lectureSolution(s, t) {
  return s.split(t).length - 1;
}

let str = "COMPUTERPROGRAMMING";
console.log(lectureSolution(str, "R"));
