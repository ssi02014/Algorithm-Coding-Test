/**
 * 프로그래머스 레벨2 괄호 회전하기
 * https://school.programmers.co.kr/learn/courses/30/lessons/76502
 */
function solution(s) {
  const matchingBrackets = {
    ")": "(",
    "}": "{",
    "]": "[",
  };
  const bracketsArray = s.split("");
  let result = 0;

  const isValidBracketSequence = (brackets) => {
    const stack = [];

    for (let i = 0; i < brackets.length; i++) {
      const bracket = brackets[i];
      const opendBracket = matchingBrackets[bracket];

      if (stack.length === 0 && opendBracket) {
        return false;
      }

      if (!opendBracket) {
        stack.push(bracket);
      } else if (stack.at(-1) === opendBracket) {
        stack.pop();
      }
    }

    return stack.length === 0;
  };

  if (isValidBracketSequence(bracketsArray)) {
    result++;
  }

  for (let i = 0; i < s.length - 1; i++) {
    const firstBracket = bracketsArray.shift();
    bracketsArray.push(firstBracket);

    if (isValidBracketSequence(bracketsArray)) {
      result++;
    }
  }
  return result;
}
