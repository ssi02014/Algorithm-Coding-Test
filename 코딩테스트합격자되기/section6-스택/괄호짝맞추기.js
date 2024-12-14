/**
 * 프로그래머스 레벨2 올바른 괄호
 * @see https://school.programmers.co.kr/learn/courses/30/lessons/12909
 */
function solution(s) {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    const bracket = s[i];

    if (stack.length === 0 && bracket === ")") {
      return false;
    }

    if (bracket === ")" && stack.at(-1) === "(") {
      stack.pop();
    } else {
      stack.push(bracket);
    }
  }

  return stack.length === 0 ? true : false;
}

console.log(solution("(())()"));
console.log(solution("((())()"));
