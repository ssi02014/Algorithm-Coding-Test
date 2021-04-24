// Run by Node.js

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const str = input[0].split("");
  const result = [];

  result.push(str.shift());
  while (str.length > 0) {
    result.push(str.pop());
    result.push(str.shift());
  }
  console.log(result.join(""));
});
