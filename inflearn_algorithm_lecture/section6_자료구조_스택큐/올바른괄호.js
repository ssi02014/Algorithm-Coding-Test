function solution(s) {
  const stack = [];

  for (let el of s) {
    if (!stack.length && el === ")") return "NO";

    if (el === "(") stack.push(el);
    else {
      if (!stack.length) return "NO";
      else stack.pop();
    }
  }

  return stack.length ? "NO" : "YES";
}

console.log(solution("(()(()))(()")); // NO
console.log(solution("(())()")); // YES
console.log(solution(")())")); // NO
console.log(solution("(()))(")); // NO
console.log(solution("(()(()))")); // YES
