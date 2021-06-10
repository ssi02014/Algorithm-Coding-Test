const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const N = parseInt(input[0]);
  const holder = input[1].split("");

  let countL = 0;

  holder.map((el) => {
    if (el === "L") countL++;
  });

  countL <= 2 ? console.log(N) : console.log(N - Math.floor(countL / 2) + 1);
});
