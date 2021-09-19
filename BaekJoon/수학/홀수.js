const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const oddNumList = input.map(Number).filter((el) => el % 2);
  let min = Math.min(...oddNumList);
  let sum = oddNumList.reduce((acc, cur) => acc + cur, 0);

  sum && console.log(sum);
  !oddNumList.length ? console.log(-1) : console.log(min);
});
