const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const list = input.slice(0, input.length).map(Number);
  const maxNum = Math.max(...list);
  const idx = list.indexOf(maxNum) + 1;

  console.log(maxNum);
  console.log(idx);
});
