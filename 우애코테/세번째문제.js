const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const N = parseInt(input.shift());
  const obj = {};

  for (let i = 0; i < N; i++) {
    const list = input[i].split(" ");

    obj[list[0]] = list[1];
  }

  console.log(obj);
});
