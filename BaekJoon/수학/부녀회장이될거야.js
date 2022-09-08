const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const t = +input[0];

  for (let i = 1; i <= t * 2; i += 2) {
    const k = +input[i];
    const n = +input[i + 1];
    const floors = [Array.from(Array(n), (_, idx) => idx + 1)];

    for (let j = 0; j < k; j++) {
      const temp = [];
      let sum = 0;

      for (let k = 0; k < n; k++) {
        sum += floors[j][k];
        temp.push(sum);
      }
      floors.push(temp);
    }

    console.log(floors[k][n - 1]);
  }
});
