const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  let [time, scoreA, scoreB] = input[0].split(" ").map(Number);

  while (time < 90) {
    time += 5;
    scoreA += 1;
  }

  if (scoreA === scoreB) console.log("same");
  else if (scoreA > scoreB) console.log("win");
  else console.log("lose");

  console.log(time, scoreA, scoreB);
});
