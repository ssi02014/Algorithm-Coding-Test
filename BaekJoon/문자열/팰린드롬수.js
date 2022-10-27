const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const n = input.slice(0, input.length - 1);
  const result = [];

  for (let i = 0; i < n.length; i++) {
    let temp = true;

    for (let j = 0; j < Math.floor(n[i].length / 2); j++) {
      const start = n[i][j];
      const end = n[i][n[i].length - j - 1];

      if (start !== end) {
        temp = false;
        result.push("no");
        break;
      }
    }

    if (temp) result.push("yes");
  }

  console.log(result.join("\n"));
});
