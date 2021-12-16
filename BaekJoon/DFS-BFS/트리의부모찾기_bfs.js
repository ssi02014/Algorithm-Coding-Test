const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const n = Number(input[0]);
  const tree = [];
  const visited = Array(n + 1).fill(false);
  const result = Array(n + 1).fill(0);

  for (let i = 1; i <= n; i++) {
    tree[i] = [];
  }

  for (let i = 1; i < n; i++) {
    const [from, to] = input[i].split(" ").map(Number);
    tree[from].push(to);
    tree[to].push(from);
  }

  bfs(1);

  console.log(result.filter((el, idx) => idx >= 2).join("\n"));

  function bfs(start) {
    visited[start] = true;
    const queue = [start];

    while (queue.length) {
      const cur = queue.shift();

      for (let i = 0; i < tree[cur].length; i++) {
        const next = tree[cur][i];

        if (!visited[next]) {
          visited[next] = true;
          result[next] = cur;
          queue.push(next);
        }
      }
    }
  }
});

/* dfs 풀이

  const n = Number(input[0]);
  const tree = Array.from(Array(n + 1), () => Array(n + 1).fill(0));
  const visited = Array(n + 1).fill(false);
  const result = Array(n + 1).fill(0);

  for (let i = 1; i < n; i++) {
    const [x, y] = input[i].split(" ").map(Number);
    adjectMatrix(x, y);
  }

  dfs(1);

  // 결과 출력
  console.log(result.filter((el, idx) => idx >= 2).join("\n"));

  function adjectMatrix(x, y) {
    [tree[x][y], tree[y][x]] = [y, x];
  }

  function dfs(node) {
    visited[node] = true; // 방문 표시

    for (let i = 0; i < tree.length; i++) {
      const next = tree[node][i];

      if (!visited[next]) {
        result[i] = node;
        dfs(i);
      }
    }
  }

*/
