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
  const num = input[1].split(" ").map(Number);
  const operator = input[2].split(" ").map(Number);
  let max = -Infinity;
  let min = Infinity;

  dfs(operator[0], operator[1], operator[2], operator[3], 1, num[0]);

  console.log(`${max}\n${min}`);

  function dfs(plus, minus, multiply, divide, cnt, sum) {
    if (cnt === n) {
      max = Math.max(max, sum);
      min = Math.min(min, sum);
    }

    if (plus > 0)
      dfs(plus - 1, minus, multiply, divide, cnt + 1, sum + num[cnt]);
    if (minus > 0)
      dfs(plus, minus - 1, multiply, divide, cnt + 1, sum - num[cnt]);
    if (multiply > 0)
      dfs(plus, minus, multiply - 1, divide, cnt + 1, sum * num[cnt]);
    if (divide > 0) {
      let result = 0;

      if (sum < 0) {
        result = -Math.floor(-sum / num[cnt]);
        dfs(plus, minus, multiply, divide - 1, cnt + 1, result);
      } else {
        result = Math.floor(sum / num[cnt]);
        dfs(plus, minus, multiply, divide - 1, cnt + 1, result);
      }
    }
  }
});
