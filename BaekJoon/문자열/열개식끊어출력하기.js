const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  let str = input[0].split("");

  while (str.length !== 0) {
    console.log(str.splice(0, 10).join(""));
  }
});
