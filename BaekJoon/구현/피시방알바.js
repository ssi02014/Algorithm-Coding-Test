const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  let n = +input[0];
  let arr = input[1].split(" ").map(Number);
  let pc = [];
  let result = 0;

  for (let num of arr) {
    if (!pc.includes(num)) {
      pc.push(num);
    } else {
      result++;
    }
  }

  console.log(result);
});
