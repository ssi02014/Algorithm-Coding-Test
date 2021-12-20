function solution(s) {
  let result = "";
  for (let el of s) {
    if (el === el.toUpperCase()) result += el.toLowerCase();
    else result += el.toUpperCase();
  }
  return result;
}

console.log(solution("StuDY"));
