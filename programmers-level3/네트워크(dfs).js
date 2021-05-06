function solution(n, computers) {
  const check = [];
  let answer = 0;

  computers.map((_) => {
    check.push(false);
  });

  function dfs(idx) {
    check[idx] = true;

    for (let i = 0; i < computers.length; i++) {
      if (computers[idx][i] === 1 && !check[i]) dfs(i);
    }
  }

  for (let i = 0; i < computers.length; i++) {
    if (!check[i]) {
      dfs(i);
      answer += 1;
    }
  }

  return answer;
}
