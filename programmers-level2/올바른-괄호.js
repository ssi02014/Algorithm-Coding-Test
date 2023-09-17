function solution(s) {
  const bracketObj = {
    ")": "(",
  };
  const stack = [];

  if (s[0] === ")") return false;

  for (const curBracket of s) {
    const lastItem = stack.at(-1);

    if (!stack.length) {
      stack.push(curBracket);
      continue;
    }

    if (bracketObj[curBracket] === lastItem) {
      stack.pop();
    } else {
      stack.push(curBracket);
    }
  }

  return stack.length ? false : true;
}
