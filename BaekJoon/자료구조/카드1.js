const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const n = parseInt(input[0]);
  const list = [];
  const result = [];

  for(let i = 1; i <= n; i++) {
    list[i - 1] = i;
  }

  while(result.length !== n) {
    result.push(list.shift());
    list.push(list.shift());
  }

  console.log(result.join(" "));
});
