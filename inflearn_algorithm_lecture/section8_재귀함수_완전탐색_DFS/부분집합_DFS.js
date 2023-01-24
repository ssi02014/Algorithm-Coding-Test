function solution(n) {
  const answer = [];
  let ch = Array(n + 1).fill(0);

  function DFS(v) {
    if (v === n + 1) {
      let temp = "";
      for (let i = 1; i <= n; i++) {
        if (ch[i] === 1) temp += i + " ";
      }
      temp.length > 0 && answer.push(temp.trim());
    } else {
      // 이진 트리에서 왼쪽
      ch[v] = 1;
      DFS(v + 1);

      // 이진 트리에서 오른쪽
      ch[v] = 0;
      DFS(v + 1);
    }
  }
  DFS(1);
  return answer.join("\n");
}

console.log(solution(3));
