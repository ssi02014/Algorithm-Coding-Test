/**
 * 삼각형이 되기위한 조건은
 * 가장 긴 막대의 길이보다 짧은 두 막대 길이의 합이 커야 된다.
 */
function solution(a, b, c) {
  const list = [a, b, c];
  let max = Number.MIN_SAFE_INTEGER;
  let result = 0;

  for (let i = 0; i < list.length; i++) {
    if (max < list[i]) max = list[i];
  }

  result = list.reduce((acc, cur) => {
    if (cur !== max) return acc + cur;
    return acc;
  }, 0);

  return result > max ? true : false;
}

console.log(solution(6, 7, 11));

function lectureSolution(a, b, c) {
  let max = 0;
  let totla = a + b + c;

  // 최대값 구하기
  if (a > b) max = a;
  else max = b;
  if (c > max) max = c;

  if (totla - max <= max) return false;
  return true;
}

console.log(lectureSolution(6, 7, 11));
