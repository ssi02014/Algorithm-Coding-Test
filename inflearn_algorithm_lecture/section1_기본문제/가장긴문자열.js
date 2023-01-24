function solution(s) {
  let max = Number.MIN_SAFE_INTEGER;
  let result = "";

  s.forEach((el) => {
    if (el.length > max) {
      max = el.length;
      result = el;
    }
  });
  return result;
}

let str = ["teacher", "time", "student", "beautiful", "good"];
console.log(solution(str));
