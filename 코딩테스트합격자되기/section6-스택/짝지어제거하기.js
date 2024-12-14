/**
 * 프로그래머스 레벨2 짝지어 제거하기
 * @see https://school.programmers.co.kr/learn/courses/30/lessons/12973
 */
function solution(s) {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    const curItem = s[i];

    if (stack.at(-1) === curItem) {
      stack.pop();
    } else {
      stack.push(curItem);
    }
  }

  return stack.length === 0 ? 1 : 0;
}
