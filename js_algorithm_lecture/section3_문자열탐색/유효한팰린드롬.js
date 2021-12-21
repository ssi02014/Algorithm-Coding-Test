function solution(s) {
  s = s.toLowerCase().match(/[a-z]/g).join("");
  const reverse = s.split("").reverse().join("");

  if (s === reverse) return "YES";
  return "NO";
}

function lectureSolution(s) {
  // 정규표현식에서 ^는 부정을 의미
  s = s.toLowerCase().replace(/[^a-z]/g, "");
  const reverse = s.split("").reverse().join("");

  if (s === reverse) return "YES";
  return "NO";
}

let str = "found7, time: study; Yduts; emit, 7Dnuof";
console.log(lectureSolution(str));
