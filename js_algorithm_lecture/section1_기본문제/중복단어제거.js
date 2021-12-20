function solution(s) {
  return s.filter((el, i) => i === s.indexOf(el));
}

let str = ["good", "time", "good", "time", "student"];
console.log(solution(str));
