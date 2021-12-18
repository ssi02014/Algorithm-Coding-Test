function solution(a, b, c) {
  const list = [a, b, c];
  let answer = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < list.length; i++) {
    if (answer > list[i]) answer = list[i];
  }
  return answer;
}

console.log(solution(6, 5, 11));
