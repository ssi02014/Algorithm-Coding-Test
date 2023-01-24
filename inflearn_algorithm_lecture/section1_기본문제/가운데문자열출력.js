function solution(s) {
  const mid = Math.floor(s.length / 2);

  if (s.length % 2 === 0) {
    // s.substring(mid, mid + 2);
    return s.substr(mid - 1, 2);
  } else {
    // s.substring(mid, mid + 1);
    return s.substr(mid, 1);
  }
}
console.log(solution("good"));
