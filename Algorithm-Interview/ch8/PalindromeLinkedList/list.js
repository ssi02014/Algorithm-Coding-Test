const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const n = input[0].split("->").map(Number);
  let idx = 0;
  while (idx < n.length) {
    if (n[idx] !== n.pop()) {
      return console.log(false);
    }
    idx++;
  }
  return console.log(true);
});
