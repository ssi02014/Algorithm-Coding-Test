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
  const first = input[1];
  let result = first.split("");

  for (let i = 2; i <= N; i++) {
    let temp = input[i];

    for (let j = 0; j < first.length; j++) {
      if (first[j] !== temp[j]) {
        result[j] = "?";
      }
    }
  }

  console.log(result.join(""));
});
