const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const [N, M] = input[0].split(" ").map(Number);
  const map = [];

  let len = 1;

  for (let i = 1; i <= N; i++) {
    map[i - 1] = input[i].split("").map(Number);
  }

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      for (let k = 1; k < Math.min(N, M); k++) {
        if (
          i + k < N &&
          j + k < M &&
          map[i][j] === map[i][j + k] &&
          map[i][j] === map[i + k][j] &&
          map[i][j] === map[i + k][j + k]
        ) {
          len = Math.max(len, k + 1);
        }
      }
    }
  }

  console.log(len * len);
});
