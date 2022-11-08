const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const n = +input[0];
  const m = +input[1];
  const s = input[2];
  let patternCount = 0;
  let result = 0;

  for (let i = 0; i < m - 1; i++) {
    const tempStr = s[i] + s[i + 1] + s[i + 2];

    if (tempStr === "IOI") {
      i++;
      patternCount++;

      if (patternCount === n) {
        result++;
        patternCount--;
      }
    } else {
      patternCount = 0;
    }
  }

  console.log(result);
});
