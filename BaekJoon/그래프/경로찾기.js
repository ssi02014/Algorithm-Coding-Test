const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const N = parseInt(input[0]);
  const graph = [];

  let result = "";

  for (let i = 1; i <= N; i++) {
    graph[i - 1] = input[i].split(" ").map(Number);
  }

  for (let k = 0; k < N; k++) {
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < N; j++) {
        if (graph[i][j] === 1) continue;
        if (graph[i][k] && graph[k][j]) graph[i][j] = 1;
      }
    }
  }

  graph.map((el) => {
    result += el.join(" ") + "\n";
  });

  console.log(result);
});
