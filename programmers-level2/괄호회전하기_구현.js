function solution(s) {
  let result = 0;

  s = s.split("");

  for (let i = 0; i < s.length; i++) {
    const stack = [];
    let valid = true;

    for (let j = 0; j < s.length; j++) {
      const stackLast = stack[stack.length - 1];

      if (s[j] === "{" || s[j] === "(" || s[j] === "[") {
        stack.push(s[j]);
      } else {
        if (s[j] === "}") {
          stackLast === "{" ? stack.pop() : (valid = false);
        } else if (s[j] === ")") {
          stackLast === "(" ? stack.pop() : (valid = false);
        } else {
          stackLast === "[" ? stack.pop() : (valid = false);
        }
      }
    }

    if (valid && !stack.length) result++;

    s.push(s.shift());
  }

  return result;
}
