const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  let time = input[0].split(":");

  time[0] += "시";
  time[1] += "분";
  time[2] += "초";

  console.log(time);
});
