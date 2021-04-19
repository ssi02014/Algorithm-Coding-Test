const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  let result = [1, 2, 3, 4];

  for (let i in result) {
    console.log("hi");
  }
});
