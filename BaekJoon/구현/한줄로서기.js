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
  const list = input[1].split(" ").map(Number);
  const result = new Array(N).fill(0);

  let left = 0;
  for (let i = 0; i < N; i++) {
    left = list[i];

    for (let j = 0; j < N; j++) {
      if (!left && !result[j]) {
        result[j] = i + 1;
        break;
      } else if (!result[j]) {
        left--;
      }
    }
  }

  console.log(result.join(" "));
});
