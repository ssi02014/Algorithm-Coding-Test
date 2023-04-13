const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  let result = "";

  for (let i = 1; i < input.length; i += 2) {
    const n = +input[i];
    const list = input[i + 1]
      .split(" ")
      .map(Number)
      .sort((a, b) => a - b);
    const mid = Math.floor(n / 2);
    const logList = Array(n).fill(null);
    let diff = 0;

    logList[mid] = list.at(-1);

    for (let i = 0; i < mid; i++) {
      const insertIdx = (i || 0) * 2;

      logList[i] = list[insertIdx];
      logList[logList.length - i - 1] = list[insertIdx + 1];
    }

    for (let i = 0; i < n - 1; i++) {
      diff = Math.max(diff, Math.abs(logList[i] - logList[i + 1]));
    }

    result += `${diff}\n`;
  }
  console.log(result);
});
