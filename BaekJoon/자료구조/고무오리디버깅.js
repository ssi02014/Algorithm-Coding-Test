const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  let countA = 0;

  for (let i = 0; i < input.length; i++) {
    if (input[i] === "문제") countA += 1;
    else if (input[i] === "고무오리") {
      if (!countA) countA += 2;
      else countA -= 1;
    }
  }

  console.log(countA === 0 ? "고무오리야 사랑해" : "힝구");
});
