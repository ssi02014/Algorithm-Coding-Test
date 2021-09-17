const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const [n, m] = input[0].split(" ").map((el) => +el);
  const node = input.slice(1);
  let visitied = new Array(n + 1).fill(false);
  // n + 1, m + 1 을 하는 이유는 index는 0부터 시작하기 때문
  const graph = Array.from(Array(n + 1), () => Array(m + 1).fill(0));

  let count = 0;

  // 인접 행렬 생성
  const adjacencyMatrix = (node) => {
    node.map((el) => {
      const [x, y] = el.split(" ").map(Number);
      [graph[x][y], graph[y][x]] = [1, 1];
    });
  };

  const dfs = (start) => {
    visitied[start] = true;

    //i = 1 인 이유는 n + 1, m + 1로 그래프를 생성했기 때문
    for (let i = 1; i <= graph[start].length; i++) {
      if (graph[start][i] === 1 && !visitied[i]) {
        dfs(i);
      }
    }
  };

  adjacencyMatrix(node);

  for (let i = 1; i < n + 1; i++) {
    if (!visitied[i]) {
      dfs(i);
      count++;
    }
  }

  console.log(count);
});
