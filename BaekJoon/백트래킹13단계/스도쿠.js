const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const graph = [];
  const blank = [];
  let result = "";

  for (let i = 0; i < input.length; i++) {
    graph[i] = input[i].split("").map(Number);
  }

  for (let i = 0; i < graph.length; i++) {
    for (let j = 0; j < graph[0].length; j++) {
      if (!graph[i][j]) blank.push([i, j]);
    }
  }

  dfs(0);

  function checkRow(x, a) {
    for (let i = 0; i < 9; i++) {
      if (a === graph[x][i]) return false;
    }
    return true;
  }

  function checkCol(y, a) {
    for (let i = 0; i < 9; i++) {
      if (a === graph[i][y]) return false;
    }
    return true;
  }

  function checkRect(x, y, a) {
    const nx = Math.floor(x / 3) * 3;
    const ny = Math.floor(y / 3) * 3;

    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (a === graph[nx + i][ny + j]) return false;
      }
    }
    return true;
  }

  function dfs(idx) {
    if (idx === blank.length) {
      for (let i = 0; i < 9; i++) {
        result += graph[i].join("") + "\n";
      }
      console.log(result);
      process.exit(0);
    }

    for (let i = 1; i < 10; i++) {
      let x = blank[idx][0];
      let y = blank[idx][1];

      if (checkRow(x, i) && checkCol(y, i) && checkRect(x, y, i)) {
        graph[x][y] = i;
        dfs(idx + 1);
        graph[x][y] = 0;
      }
    }
  }
});
