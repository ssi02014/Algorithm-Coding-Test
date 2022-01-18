const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const num = +input[0];
  let result = "";

  let temp = "";
  for (let i = 0; i < num; i++) {
    temp += "*";

    result += temp + "\n";
  }

  console.log(result);
});
