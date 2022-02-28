function solution(n) {
  let result = "";

  function dfs(t) {
    const quotient = parseInt(t / 2);
    const remainder = t % 2;

    if (!t) return;

    dfs(quotient);
    result += remainder;
  }

  dfs(n);
  return result;
}

console.log(solution(11));
