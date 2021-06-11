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
  const money = [];
  const d = new Array(M + 1).fill(10001);

  for (let i = 1; i <= N; i++) {
    money[i - 1] = parseInt(input[i]);
  }

  d[0] = 0;

  for (let i = 0; i < N; i++) {
    for (let j = money[i]; j <= M; j += money[i]) {
      if (d[j - money[i]] !== 10001) {
        d[j] = Math.min(d[j], d[j - money[i]] + 1);
      }
    }
  }

  d[M] === 10001 ? console.log(-1) : console.log(d[15]);
});
