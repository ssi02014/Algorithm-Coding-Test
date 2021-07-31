const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const [N, M] = input[0].split(" ").map(Number);
  const strSet = new Set();
  let searchStr = "";
  let count = 0;

  for (let i = 1; i <= N; i++) {
    strSet.add(input[i]);
  }

  for (let i = N + 1; i <= M + N; i++) {
    searchStr = input[i];

    if (strSet.has(searchStr)) count++;
  }
  console.log(count);
});
