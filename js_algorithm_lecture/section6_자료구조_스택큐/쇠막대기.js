function solution(s) {
  const stack = [];
  let result = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") stack.push("(");
    else {
      stack.pop();
      if (s[i - 1] === "(") result += stack.length;
      else result++;
    }
  }
  return result;
}

let a = "()(((()())(())()))(())";
console.log(solution(a));
