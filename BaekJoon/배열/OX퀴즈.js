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
  let result = "";

  for (let i = 1; i <= N; i++) {
    const str = input[i];
    let count = 0;
    let sum = 0;

    for (let j = 0; j < str.length; j++) {
      str[j] === "O" ? (count += 1) : (count = 0);
      sum += count;
    }
    result += sum + "\n";
  }

  console.log(result);
});
