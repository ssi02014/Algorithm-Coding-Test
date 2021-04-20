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
  let result = [];

  result.push(str.join(""));

  while (str.length !== 1) {
    str.shift();
    result.push(str.join(""));
  }
  console.log(result.sort().join("\n"));
});
