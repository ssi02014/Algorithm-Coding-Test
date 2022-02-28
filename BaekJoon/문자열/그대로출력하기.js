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

  for (let el of input) {
    result += el + "\n";
  }
  console.log(result);
});
