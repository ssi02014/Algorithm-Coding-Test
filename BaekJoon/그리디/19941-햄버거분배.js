const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const [N, K] = input[0].split(" ").map(Number);
  const list = input[1].split("");
  let count = 0;

  for (let i = 0; i < list.length; i++) {
    if (list[i] === "P") {
      for (let j = i - K; j < i + K + 1; j++) {
        if (j >= 0 && j < N && list[j] === "H") {
          count++;
          list[j] = "";
          break;
        }
      }
    }
  }

  console.log(count);
});
