const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
  input.push(line);
}).on("close", function () {
  const [n, m] = input[0].split(" ").map(Number);
  const visited = new Array(n + 1).fill(false);
  const connectList = Array.from(Array(n + 1), () => []);

  let count = 0;

  for (let i = 1; i < input.length; i++) {
    const [from, to] = input[i].split(" ").map(Number);
    connectList[from].push(to);
    connectList[to].push(from);
  }

  const dfs = (start) => {
    visited[start] = true;

    for (let i = 0; i < connectList[start].length; i++) {
      const next = connectList[start][i];

      if (!visited[next]) dfs(next);
    }
  };

  for (let i = 1; i <= n; i++) {
    if (!visited[i]) {
      dfs(i);
      count++;
    }
  }

  console.log(count);
});
