const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const [N, K] = [+input[0], +input[1]];
  const list = input.slice(2, N + 2).map(Number);
  const ck = new Array(N).fill(0);
  const temp = [];
  const result = new Set();

  list.sort((a, b) => a - b);
  dfs(0);

  function dfs(depth) {
    if (depth === K) {
      let numSet = "";
      temp.forEach((el) => (numSet += el));
      result.add(numSet);
      return;
    }

    for (let i = 0; i < N; i++) {
      if (ck[i]) continue;

      ck[i] = 1;
      temp.push(list[i]);
      dfs(depth + 1);

      //dfs 종료 후
      temp.pop();
      ck[i] = 0;
    }
  }

  console.log(Array.from(result).length);
});
