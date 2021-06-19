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
  const arr = input[1].split(" ").map(Number);
  let result = "YES";
  let status = 1;

  for (let i = 1; i < N; i++) {
    if (arr[i - 1] < arr[i]) status++;
    else break;
  }

  for (let i = status; i < N; i++) {
    if (arr[i - 1] <= arr[i]) result = "NO";
  }

  console.log(result);
});
