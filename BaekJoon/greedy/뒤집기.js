const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const numList = input[0].split("").map(Number);
  let zero = 0;
  let one = 0;

  if (numList[0] === 0) zero++;
  else one++;

  for (let i = 1; i < numList.length; i++) {
    if (numList[i] !== numList[i - 1]) {
      if (numList[i] === 0) zero++;
      else one++;
    }
  }

  console.log(Math.min(zero, one));
});
