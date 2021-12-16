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
