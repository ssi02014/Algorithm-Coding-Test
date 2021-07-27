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
  const result = input[1].split("");

  for (let i = 2; i <= N; i++) {
    const temp = input[i];

    for (let j = 0; j < result.length; j++) {
      if (result[j] !== temp[j]) result[j] = "?";
    }
  }

  console.log(result.join(""));
});
