function solution(s) {
  let count = 0;
  for (let el of s) {
    const ascii = el.charCodeAt();
    // 알파벳 대문자 65 ~ 90 -> 26개
    // 알파벳 소문자 97 ~ 122 -> 26개
    if (ascii >= 65 && ascii <= 90) count++;
  }
  return count;
}

function lectureSolution(s) {
  let count = 0;
  for (let el of s) {
    if (el === el.toUpperCase()) count++;
  }
  return count;
}

let str = "KoreaTimeGood";
console.log(solution(str));
