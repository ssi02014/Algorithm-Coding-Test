function solution(s) {
  let result = "";
  for (let el of s) {
    if (el === "A") result += "#";
    else result += el;
  }
  return result;
}

function lectureSolution(s) {
  return s.replace(/A/g, "#");
}

let str = "BANANA";
console.log(solution(str));
