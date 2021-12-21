function solution(s) {
  const list = s.toLowerCase().split("");

  while (list.length > 1) {
    if (list.shift() !== list.pop()) {
      return "NO";
    }
  }
  return "YES";
}

function lectureSolution1(s) {
  s = s.toLowerCase();
  let length = s.length;

  for (let i = 0; i < Math.floor(length / 2); i++) {
    if (s[i] !== s[length - i - 1]) {
      return "NO";
    }
  }
  return "YES";
}

function lectureSolution2(s) {
  s = s.toLowerCase();
  const reverse = s.split("").reverse().join("");

  if (reverse === s) return "YES";
  return "NO";
}

let str = "goooG";
console.log(lectureSolution2(str));
