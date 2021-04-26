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
  const result = [];

  let num = 0;
  for (let i = 0; i < N; i++) {
    num = parseInt(input[i]);

    if (num !== 0) result.push(num);
    else result.pop();
  }

  if (result.length === 0) console.log(0);
  else console.log(result.reduce((a, b) => a + b));
});
