const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const pointList = input[0].split(", ").map(Number);

  let sum = 0;
  for (let i = 0; i < pointList.length; i++) {
    sum += pointList[i];
  }

  console.log(Math.round(sum / pointList.length));
});
