function solution(s) {
  let temp = [];
  let result = "";

  for (let el of s) {
    if (!temp.includes(el)) {
      temp.push(el);
      result += el;
    } else {
      continue;
    }
  }
  return result;
}

function lectureSolution(s) {
  let result = "";
  for (let i = 0; i < s.length; i++) {
    if (s.indexOf(s[i]) === i) result += s[i];
  }
  return result;
}
console.log(lectureSolution("ksekkset"));
