const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const computers = parseInt(input[0]);
  const networkLine = parseInt(input[1]);
  const directConnect = [];
  let graph = [];
  let dfsVisited = Array(computers + 1).fill(false);
  let result = 0;

  for (let i = 2; i < input.length; i++) {
    directConnect[i - 2] = input[i].split(" ").map(Number);
  }

  function adjacencyMatrix(computers, input) {
    graph = Array.from(Array(computers + 1), () =>
      Array(computers + 1).fill(0)
    );

    for (let i of input) {
      let [x, y] = i;
      [graph[x][y], graph[y][x]] = [1, 1];
    }
  }

  function dfs(computers, startNode) {
    if (dfsVisited[startNode]) return;

    dfsVisited[startNode] = true;
    result++;

    for (let i = 1; i < computers; i++) {
      if (graph[startNode][i] && !dfsVisited[i]) dfs(computers, i);
    }
  }

  adjacencyMatrix(computers, directConnect);
  dfs(computers, 1);

  console.log(result - 1);
});
